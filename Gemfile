source "https://rubygems.org"

# --- Local Ruby-version compatibility shim, NOT a real dependency ---
# github-pages also pins Liquid 4.0.3, which still calls Ruby's old taint-security methods
# (String#tainted? etc.) that were fully removed from Ruby core in a later version than Liquid
# expects. This crashes `bundle exec jekyll serve` locally on modern Ruby with a NoMethodError.
# GitHub's actual Pages build runs on their own older Ruby where these still exist, so this is a
# local-only problem — confirmed by the fact that this exact site already builds and deploys fine
# on GitHub Pages. The natural fix (a Jekyll plugin in _plugins/) doesn't work here because
# github-pages forces safe mode (see its lib/github-pages/configuration.rb), which disables
# custom plugins entirely — so the shim has to live here, in the Gemfile itself, which Bundler
# evaluates as plain Ruby before anything else runs. Must use `::Object.class_eval` rather than
# `class Object ... end` — the latter silently reopens a shadow class nested inside Bundler's own
# eval context instead of the real top-level Object, so the patch looks like it worked but doesn't.
unless ::Object.method_defined?(:tainted?)
  ::Object.class_eval do
    define_method(:tainted?) { false }
    define_method(:taint) { self }
    define_method(:untaint) { self }
    define_method(:trust) { self }
    define_method(:untrust) { self }
    define_method(:untrusted?) { false }
  end
end

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
