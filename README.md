# seedfault-site

The website for [driftlab](https://github.com/omkar619-dev/driftlab), which finds the writes a system acknowledged and then lost.

Built with [Astro](https://astro.build). Cloudflare Workers serves it as static files, and Cloudflare builds and deploys every push to `main`.

## Run it locally

Needs Node 24 (see `.node-version`).

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

The built site goes into `dist/`.
