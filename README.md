# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Editing site content

[`content.yml`](./content.yml) holds the three lists that change often —
**products, projects and skills**. Everything else is static code:

| Where | What lives there |
|---|---|
| `content.yml` | products, projects, skills |
| `src/site.ts` | name, role, company, email, GitHub handle, blog URL, socials |
| `src/content/categories.ts` | the project filter buttons, in order |
| `src/content/icon-names.ts` + `icons.ts` | the lucide icons skills may use |
| the components | section headings and body copy |
| `src/routes/*.tsx` | page metadata (title, description, OG tags) |

A product needs `name`, `url` (its live site), `description`, `tags` and
`image`. A project needs `title`, `description`, `categories` and `repo` — the
full `https://github.com/owner/repo` URL, which both the card image and its
"View on GitHub" row link to. A project's `image` is optional; without one the
card shows a lettered placeholder.

Images are file names, not paths: product images live in `src/assets/products/`
and project images in `src/assets/projects/`.

`content.yml` is validated when the site is built (`tools/content-plugin.ts`),
so a missing field, an unknown icon, a category that is not in
`src/content/categories.ts`, an image file that does not exist, a `repo` that is
not a GitHub repository URL, or a stray key fails the build and names the exact
path — for example `projects.1.repo: must be a GitHub repository URL`.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
bun install   # bun.lock and bunfig.toml are the committed lockfile + install policy
bun run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
