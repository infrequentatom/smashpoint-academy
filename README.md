# Smashpoint Badminton Academy — Website

Static Next.js 14 site (no server, no database). Deploys on Vercel and Cloudflare Pages.

## Edit content
Everything editable is in **`site.config.js`**: phone numbers, timings, locations, programmes,
gallery photos/videos and the search/share description. Save, commit, push — Vercel redeploys automatically.

## Photos & videos
1. Put files in `public/media/`.
2. Add an entry under `gallery` in `site.config.js` (`type`, `src`, `width`, `height`, `alt`; videos also take `poster`).
Keep videos short (under ~25 MB each; Cloudflare Pages' per-file limit).

## Run locally
    npm install
    npm run dev          # http://localhost:3000
    npm run lint
    npm run build        # outputs the static site to /out

## Deploy on Vercel (demo)
1. Push this folder to a GitHub repository.
2. vercel.com -> Add New -> Project -> import the repo -> Deploy (defaults are correct).
3. Optional: add env var `NEXT_PUBLIC_SITE_URL` = your final URL (e.g. `https://www.yourdomain.com`)
   so share previews and the canonical link use the right address. Redeploy after setting it.

## Move to Cloudflare Pages (after buying a domain)
1. Cloudflare: add your domain (Free plan) and update nameservers at your registrar.
2. Workers & Pages -> Create -> Pages -> connect the same GitHub repo.
3. Build command `npm run build`, output directory `out`, env var `NODE_VERSION=20`
   (and `NEXT_PUBLIC_SITE_URL` as above).
4. Project -> Custom domains -> add your domain. Then remove the domain from Vercel.
Security/caching headers are in `vercel.json` (Vercel) and `public/_headers` (Cloudflare).

## Bookings
Handled by call / WhatsApp using the numbers in `site.config.js`. There is no enquiry form
because a static site has no server to receive it.
