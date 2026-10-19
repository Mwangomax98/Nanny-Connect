import config from '@payload-config'
import { sql } from '@payloadcms/db-postgres'
import { getPayload } from 'payload'

export const dynamic = 'force-dynamic'

// Used by the deploy health check and uptime monitoring.
export async function GET() {
  try {
    const payload = await getPayload({ config })
    await payload.db.drizzle.execute(sql`select 1`)
    return Response.json({ status: 'ok' })
  } catch {
    return Response.json({ status: 'error' }, { status: 503 })
  }
}
