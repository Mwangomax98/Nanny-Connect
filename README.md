# tai – Pride of Africa website

A fast showcase website for **tai – Pride of Africa** (Magila Street, Ilala, Dar es Salaam).
Visitors browse products in English or Swahili and tap **WhatsApp** to ask for prices.

- No database, no server, no admin login: the site is plain web pages built with [Astro](https://astro.build).
- Hosted free on **Cloudflare Pages**. Every change saved on GitHub goes live in about a minute.

---

## How to edit a product (no coding tools needed)

1. On GitHub, open the folder `src/content/products`.
2. Click the product file, for example `t-05.md`.
3. Click the **pencil icon** (top right of the file) to edit.
4. Change the text after the colons. Keep the spaces at the start of each line exactly as they are.
5. Click **Commit changes…**, then **Commit changes** again.
6. Wait about a minute and refresh the website.

If you make a mistake, the site will not update and the old version stays live. GitHub shows a red ✗ next to the change. Open it to see the error, or undo your edit.

### Fields in a product file

| Field          | Meaning                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------ |
| `code`         | Model code shown on the site and in the WhatsApp message, e.g. `T-05`                      |
| `category`     | One of: `chargers`, `cables`, `batteries`, `holders`, `storage`, `clippers`, `audio`       |
| `order`        | Position in lists (smaller number = earlier)                                               |
| `featured`     | `true` shows it on the homepage                                                            |
| `hidden`       | `true` hides it from the site without deleting it                                          |
| `images`       | Photo file names in the same folder; the first is the main photo                           |
| `name`, `summary` | Text in English (`en`) and Swahili (`sw`)                                               |
| `specs`        | Table rows: label in both languages plus a `value`                                         |
| `inTheBox`     | List of items in the box, in both languages                                                |
| `warrantyDays` | Optional, e.g. `365`                                                                       |
| `price`        | Optional, e.g. `TSh 25,000`. If missing, the site shows "Price on request"                 |

## How to add a new product

1. Open `src/content/products` on GitHub.
2. Click **Add file → Upload files** and upload the photo. Name it after the model code, e.g. `t-11.webp` or `t-11.jpg` (lower case, no spaces).
3. Open an existing product file (e.g. `t-018.md`), select all its text and copy it.
4. Go back to the folder, click **Add file → Create new file**, name it `t-11.md` and paste.
5. Change the code, texts, and the image name under `images:` to `./t-11.webp`.
6. Click **Commit changes…** twice. The new page appears at `/products/t-11/`.

## Other things you can edit

- Phone, WhatsApp number, email, address: `src/data/site.ts`
- Category names: `src/data/site.ts`
- Buttons and short texts (both languages): `src/lib/i18n.ts`
- Page texts: the `copy` section at the top of each file in `src/views/`

---

## Publish on Cloudflare Pages (one time)

1. Create a free account at https://dash.cloudflare.com/sign-up.
2. In the left menu click **Workers & Pages**, then **Create**, then the **Pages** tab, then **Connect to Git**.
3. Choose GitHub, allow access to this repository, select it and click **Begin setup**.
4. Set **Production branch** to the branch you publish from (e.g. `main`).
5. **Framework preset:** Astro. **Build command:** `npm run build`. **Build output directory:** `dist`.
6. Click **Save and Deploy**. Your site appears at `https://<project-name>.pages.dev`.
7. Go to the project's **Settings → Variables and Secrets**, add `SITE_URL` with your site address (e.g. `https://tai-website.pages.dev`, later your own domain), then redeploy. This makes WhatsApp previews and Google links correct.
8. When you buy a domain: project → **Custom domains** → **Set up a custom domain**, then update `SITE_URL`.

## For developers

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + build into dist/
npm run preview  # serve the built site
```

English pages live at `/`, Swahili at `/sw/`. Each page in `src/pages` is a thin wrapper around a view in `src/views` that takes `lang`.
