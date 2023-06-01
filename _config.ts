import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume()
  .use(date())
  .use(postcss())
  .ignore("README.md")
  .copy("js")
  .copy("img")
  .remoteFile(
    "_includes/css/normalize.css",
    "https://unpkg.com/ui-normalize@0.3.0/ui-normalize.css",
  )
  .remoteFile(
    "js/deps/vimeo-player.js",
    "https://unpkg.com/@vimeo/player@2.20.1/dist/player.es.js",
  );

export default site;
