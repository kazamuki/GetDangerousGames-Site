source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins

# github-pages pins Jekyll 3.9.0 (2019) to match GitHub's frozen build environment. That version
# assumes several libraries are always part of Ruby's standard library — true when it was written,
# no longer true on modern Ruby (webrick left in 3.0, csv/logger/etc left in 3.4+). Without these
# explicit dependencies, `bundle exec jekyll` fails with a bundler error that hides the real
# LoadError ("command not found: jekyll" instead of "cannot load such file -- csv").
gem "webrick"
gem "csv"
gem "logger"
gem "base64"
gem "bigdecimal"
