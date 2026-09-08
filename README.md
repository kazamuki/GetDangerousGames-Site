# Get Dangerous Games — Site

The home site for Get Dangerous Games, live at **[getdangerous.net](https://getdangerous.net)**. Built with Jekyll and hosted on GitHub Pages. Covers Home, Writing (hosted short stories), Blog, YouTube, Podcasts, About, and Contact.

For the full project history, brand/content decisions, and open items, see [CLAUDE.md](CLAUDE.md) — this README only covers what you need to get the site running locally.

## Tech stack

- **[Jekyll](https://jekyllrb.com/)** (via the `github-pages` gem, which pins the same Jekyll/plugin versions GitHub's Pages build uses — so a working local build matches what actually deploys)
- Plain HTML/Liquid templates + one hand-written CSS file (`assets/css/main.css`, plus `assets/css/theme.css` for the light/dark theme tokens) — no JS build step, no bundler/webpack
- A little vanilla JS for interactive bits (blog tag filtering, theme toggle, home page spotlight rotators)

## Prerequisites

- **Ruby**, version 3.x or newer (this project is developed against Ruby 4.0.6). Get it from [ruby-lang.org](https://www.ruby-lang.org/en/downloads/) — on Windows, use [RubyInstaller](https://rubyinstaller.org/downloads/) with the **Devkit** variant, since some transitive gem dependencies (e.g. `http_parser.rb`) need to compile native extensions and there's no precompiled Windows binary for them.
  - If you installed the non-Devkit RubyInstaller build and hit a native-compile error during `bundle install`, run `ridk install` (bundled with RubyInstaller) to add the MSYS2/MinGW toolchain afterward, then retry.
- **Bundler** (ships with modern Ruby; if missing, `gem install bundler`)

No Node/npm, no other language runtimes required.

## Install

From the repo root:

```bash
bundle install
```

This reads `Gemfile`/`Gemfile.lock` and installs Jekyll plus the `github-pages` plugin set into your local Ruby gem environment.

> **Note for Windows + a Ruby version newer than what `github-pages`/Jekyll 3.9/Liquid 4.0.3 expect:** those gems assume a few libraries (`webrick`, `csv`, `logger`, `base64`, `bigdecimal`) are always part of Ruby's standard library, and call some old Ruby "taint" methods that were removed from newer Ruby versions. The `Gemfile` already carries explicit gem entries and a compatibility shim for both issues — you shouldn't need to do anything extra, but if you ever see `bundler: command not found: jekyll`, don't trust that message at face value; run `ruby -S bundle exec jekyll build` directly to see the real underlying error before assuming gems are missing.

## Run locally

```bash
bundle exec jekyll serve
```

Then open **http://localhost:4000**. Jekyll watches the filesystem and rebuilds automatically on save — refresh the browser to see changes (no live-reload injection is configured).

## Build / "test"

This is a static site with no test suite — the meaningful check is whether it builds cleanly and renders correctly:

```bash
bundle exec jekyll build
```

This generates the static site into `_site/`. A clean build (no errors/warnings) plus a manual look at the page(s) you changed via `jekyll serve` is the standard way to verify a change here. There's no CI pipeline — GitHub Pages runs its own Jekyll build directly from the `main` branch on every push.

## Project structure

- `_config.yml`, `_layouts/`, `_includes/`, `assets/` — the Jekyll site itself
- `_posts/` — native blog posts (`/blog/`)
- `_stories/` — native story pages, a Jekyll collection (`/writing/<slug>/`)
- `_data/changelog.yml` — entries for `/changelog/`
- `content/` — old-site content notes and porting/decision logs (excluded from the built site, kept for reference)
- `brand/` — brand guide and asset-licensing notes (excluded from the built site)

See [CLAUDE.md](CLAUDE.md) for the full file-by-file breakdown and the reasoning behind specific design/content decisions.

## Contributing

`main` is branch-protected: direct pushes are rejected, and all changes land via pull request (no required approvals, but force-pushes and branch deletion are blocked). Workflow:

```bash
git checkout -b feature/short-name main
# commit your changes
git push -u origin feature/short-name
```

Then open a PR into `main` (`gh pr create` or the GitHub web UI) and merge once ready.
