import f from "https://deno.land/x/netlify_cms_config@v0.3.2/mod.ts";

// Set defaults
f.defaultRequired = false;
f.defaults.image.allowMultiple(false);
f.defaults.object.collapsed();
f.defaults.list.collapsed().minimizeCollapsed();
f.defaults.markdown.minimal();

const config = {
  backend: {
    name: "git-gateway",
    branch: "master",
  },
  media_folder: "img",
  // deno-lint-ignore no-explicit-any
  collections: [] as any[],
};

// Create Data files collection
const speakers = f.folder("Speakers", "speakers")
  .description("Invitados (profesores y conferencistas)")
  .sortableFields("title")
  .preview(false)
  .format("yaml")
  .fields([
    f.string("Title"),
    f.string("Tag"),
    f.string("Id"),
    f.boolean("Draft"),
    f.string("Role"),
    f.number("Order"),
    f.object("Company", [
      f.string("Name"),
      f.string("Url"),
    ]),
    f.image("Img").mediaFolder("img/speakers"),
    f.list("Links", [
      f.string("Text"),
      f.image("Icon"),
      f.string("Url"),
    ]),
    f.markdown("Bio"),
    f.object("Workshop", [
      f.string("Title"),
      f.string("Day"),
      f.markdown("Description"),
    ]),
    f.object("Conference", [
      f.string("Title"),
      f.string("Day"),
      f.markdown("Description"),
    ]),
  ]);

config.collections.push(
  speakers.toJSON()
);

export default config;
