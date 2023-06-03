import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume()
  .use(date())
  .use(postcss())
  .ignore("README.md")
  .copy("js")
  .copy("img")
  .copy("fonts")
  .copy("favicon.ico")
  .copy("favicon-32x32.png")
  .copy("favicon-16x16.png")
  .remoteFile(
    "_includes/css/normalize.css",
    "https://unpkg.com/ui-normalize@0.3.0/ui-normalize.css",
  )
  .remoteFile(
    "js/deps/vimeo-player.js",
    "https://unpkg.com/@vimeo/player@2.20.1/dist/player.es.js",
  )
  .remoteFile(
    "js/deps/typed.js",
    "https://unpkg.com/typed.js@2.0.16/dist/typed.module.js",
  );

export default site;
