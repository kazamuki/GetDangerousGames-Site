# Get Dangerous Games — Site

The home site for Get Dangerous Games, live at **[getdangerous.net](https://getdangerous.net)**. Built with Jekyll and hosted on GitHub Pages. Covers Home, Writing (hosted short stories), Blog, YouTube, Podcasts, About, and Contact.

For the full project history, brand/content decisions, and open items, see [CLAUDE.md](CLAUDE.md) — this README only covers what you need to get the site running locally.

## Tech stack

- **[Jekyll](https://jekyllrb.com/)** (via the `github-pages` gem, which pins the same Jekyll/plugin versions GitHub's Pages build uses — so a working local build matches what actually deploys)
- Plain HTML/Liquid templates + one hand-written CSS file (`assets/css/main.css`, plus `assets/css/theme.css` for the light/dark theme tokens) — no JS build step, no bundler/webpack
- A little vanilla JS for interactive bits (blog tag filtering, theme toggle, home page spotlight rotators)

No Node/npm, no other language runtimes required — just Git/GitHub Desktop (to get the code) and Ruby (to run it).

## Setup, in order

These steps have to happen in this order — in particular, **Ruby has to be installed and working *before* you run any `bundle` command**, since `bundle` is a Ruby program and doesn't exist on the machine until Ruby is installed.

### 1. Get a GitHub account

If you don't have one already: [github.com/signup](https://github.com/signup). Whoever's adding you needs to invite you as a collaborator on this repo (GitHub → repo → Settings → Collaborators) — you'll get an email invite to accept.

### 2. Get the code onto your machine

Two options, pick one:

**Option A — GitHub Desktop (recommended if you're not comfortable with the command line):**
1. Install [GitHub Desktop](https://desktop.github.com/) and sign in with your GitHub account.
2. **File → Clone Repository**, find `kazamuki/GetDangerousGames-Site` under the "GitHub.com" tab, choose a local folder, click Clone.

**Option B — Git command line:**
1. Install [Git](https://git-scm.com/downloads) (or `winget install --id Git.Git -e --source winget` on Windows).
2. Set your identity once: `git config --global user.name "Your Name"` and `git config --global user.email "you@example.com"`.
3. `cd` to wherever you want the project folder to live, then:
   ```bash
   git clone https://github.com/kazamuki/GetDangerousGames-Site.git
   ```
   This creates a `GetDangerousGames-Site` folder in your current directory with the full repo inside it.

Either way, you now have the files — but nothing will run yet. That needs Ruby.

### 3. Install Ruby (required before step 4)

- Get it from [RubyInstaller](https://rubyinstaller.org/downloads/) (Windows) or [ruby-lang.org](https://www.ruby-lang.org/en/downloads/) (Mac/Linux). This project is developed against Ruby 4.0.6; anything 3.x+ should work.
- **On Windows, pick the "Devkit" installer**, not the plain one — some dependencies (e.g. `http_parser.rb`) need to compile native code, and there's no precompiled Windows binary for them.
- Near the end of the Devkit installer, it opens a terminal and asks which MSYS2 components to install (a numbered menu: base installation, system update, MinGW development toolchain). **Select the MinGW development toolchain option, not just the base installation** — that's the actual compiler toolchain `bundle install` needs. If you already ran it with just the base install, run `ridk install` again and pick the toolchain option this time.
- Confirm it worked in a terminal:
  ```bash
  ruby -v
  gem -v
  ```
  Both need to print a version number. Ruby adds itself to your system PATH during install, so these commands work from any folder, in any new terminal window you open — if a terminal was already open before you finished installing Ruby, close and reopen it.
- Bundler usually ships with Ruby already; if `bundle -v` fails, run `gem install bundler`.

### 4. Install the project's dependencies

Open a terminal **inside the cloned repo folder** (this part does matter — it looks for `Gemfile`/`Gemfile.lock` in the current directory) and run:

```bash
bundle install
```

This installs Jekyll plus the `github-pages` plugin set into your local Ruby gem environment.

> **Note for Windows + a Ruby version newer than what `github-pages`/Jekyll 3.9/Liquid 4.0.3 expect:** those gems assume a few libraries (`webrick`, `csv`, `logger`, `base64`, `bigdecimal`) are always part of Ruby's standard library, and call some old Ruby "taint" methods that were removed from newer Ruby versions. The `Gemfile` already carries explicit gem entries and a compatibility shim for both issues — you shouldn't need to do anything extra, but if you ever see `bundler: command not found: jekyll`, don't trust that message at face value; run `ruby -S bundle exec jekyll build` directly to see the real underlying error before assuming gems are missing.

### 5. Run it locally

From the same repo folder:

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

`main` is branch-protected: direct pushes are rejected, and all changes land via pull request (no required approvals, but force-pushes and branch deletion are blocked).

**In GitHub Desktop:** use the "Current Branch" dropdown → "New Branch" to branch off `main`, make your changes, commit them in the left panel, click "Push origin," then click "Create Pull Request" (opens the PR form in your browser).

**On the command line:**
```bash
git checkout -b feature/short-name main
# commit your changes
git push -u origin feature/short-name
```
Then open a PR into `main` (`gh pr create` or the GitHub web UI) and merge once ready.
