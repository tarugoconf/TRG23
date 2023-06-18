import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import postcss from "lume/plugins/postcss.ts";
import inline from "lume/plugins/inline.ts";
import vento from "https://raw.githubusercontent.com/lumeland/experimental-plugins/main/vento/mod.ts";

const site = lume()
  .use(date())
  .use(inline())
  .use(postcss({
    includes: "styles/_css",
  }))
  .use(vento())
  .ignore("README.md")
  .copy("js")
  .copy("img")
  .copy("fonts")
  .copy("favicon.ico")
  .copy("favicon-32x32.png")
  .copy("favicon-16x16.png")
  .data("cache", Date.now())
  .remoteFile(
    "styles/_css/normalize.css",
    "https://unpkg.com/ui-normalize@0.3.0/ui-normalize.css",
  )
  .remoteFile(
    "js/deps/vimeo-player.js",
    "https://unpkg.com/@vimeo/player@2.20.1/dist/player.es.js",
  )
  .remoteFile(
    "js/deps/typed.js",
    "https://unpkg.com/typed.js@2.0.16/dist/typed.module.js",
  )
  .remoteFile(
    "js/deps/carousel.js",
    "https://unpkg.com/@oom/carousel@4.2.0/src/carousel.js",
  )
  .remoteFile(
    "js/deps/navigation.js",
    "https://unpkg.com/@oom/carousel@4.2.0/src/navigation.js",
  );

export default site;
