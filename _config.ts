import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";

const site = lume()
  .use(date())
  .ignore("README.md");

export default site;
