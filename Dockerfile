# Production image. Build: docker build -t tai-website .
FROM node:22-alpine AS base
RUN corepack enable

FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml .npmrc ./
RUN pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
# Placeholders so the build can load the Payload config. Real values come from the server's .env at runtime.
ENV DATABASE_URL=postgres://build:build@localhost:5432/build
ENV PAYLOAD_SECRET=build-time-placeholder
RUN pnpm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
# Uploaded images live here; mount a volume on it in production.
RUN mkdir -p media && chown nextjs:nodejs media

USER nextjs
EXPOSE 3000

# Pending database migrations run automatically when the app starts.
CMD ["node", "server.js"]
