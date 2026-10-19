# tai – Pride of Africa website

A fast showcase website for **tai – Pride of Africa** (Magila Street, Ilala, Dar es Salaam).
Visitors browse products in English or Swahili and tap **WhatsApp** to ask for prices.

- No database, no server, no admin login: the site is plain web pages built with [Astro](https://astro.build).
- Hosted free on **Vercel**. Every change saved on GitHub goes live in about a minute.

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
   Tip: photos look best with the background removed (a transparent PNG or WebP, for example made with remove.bg). A plain white background also works.
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

## Publish on Vercel (one time)

1. Go to https://vercel.com/signup and choose **Continue with GitHub**.
2. Click **Add New… → Project**.
3. Next to **Nanny-Connect**, click **Import**. If it is not listed, click **Adjust GitHub App Permissions** and give Vercel access to it.
4. Vercel detects **Astro** by itself. Leave every setting as it is and click **Deploy**.
5. After about a minute your site is live at `https://<project-name>.vercel.app`.
6. Vercel publishes the branch that is the GitHub repository's default branch. Every change saved to that branch goes live automatically.
7. When you buy a domain: project → **Settings → Domains** → add it and follow the DNS instructions. Links and WhatsApp previews switch to the new domain on the next deploy.

## For developers

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + build into dist/
npm run preview  # serve the built site
```

English pages live at `/`, Swahili at `/sw/`. Each page in `src/pages` is a thin wrapper around a view in `src/views` that takes `lang`.
