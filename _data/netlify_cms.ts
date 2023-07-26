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

// Index
const pages = f.files("Pages")
  .description("Páginas individuales del sitio")
  .preview(false);

pages.file("Portada", "index.yml", [
    f.string("Title"),
    f.object("About", [
      f.string("Title"),
      f.markdown("Intro"),
      f.object("Cta", [
        f.string("Text"),
        f.string("Url"),
        f.markdown("Footer"),
      ]),
    ]),
    f.object("Video", [
      f.number("Id"),
      f.image("Cover"),
    ]),
    f.object("Menu", [
      f.list("Items", [
        f.string("Text"),
        f.string("Url"),
      ]),
    ]),
    f.object("Block Speakers", [
      f.string("Title"),
      f.markdown("Intro"),
    ]),
    f.object("Block Calendar", [
      f.string("Title"),
      f.markdown("Intro"),
      f.list("Days", [
        f.string("Title"),
        f.list("Items", [
          f.string("Time"),
          f.string("Title"),
          f.markdown("Description"),
        ])
      ]),
    ]),
    f.object("Partners", [
      f.string("Title"),
      f.markdown("Intro"),
      f.list("Items", [
        f.image("Img").mediaFolder("img/partners"),
        f.string("Url"),
        f.string("Alt"),
        f.string("Description"),
      ]),
    ]),
    f.list("Collaborators", [
      f.image("Img").mediaFolder("img/collaborators"),
      f.string("Url"),
      f.string("Alt"),
    ]),
    f.object("Patrons", [
      f.string("Title"),
      f.markdown("Intro"),
      f.list("Items", [
        f.image("Img").mediaFolder("img/patrons"),
        f.string("Url"),
        f.string("Alt"),
      ]),
    ]),
    f.object("Tickets", [
      f.string("Title"),
      f.markdown("Intro"),
      f.object("Cta", [
        f.string("Text"),
        f.string("Url"),
      ]),
    ]),
    f.object("Community day", [
      f.string("Title"),
      f.markdown("Intro"),
      f.object("Cta", [
        f.string("Text"),
        f.string("Url"),
      ]),
    ]),
    f.object("Contact", [
      f.string("Title"),
      f.list("Items", [
        f.string("Title"),
        f.string("Info"),
        f.list("Links", [
          f.string("Text"),
          f.string("Url"),
          f.image("Icon"),
        ]),
      ]),
    ]),
    f.object("FAQ", [
      f.string("Title"),
      f.list("Questions", [
        f.string("Question"),
        f.markdown("Answer"),
      ]),
    ])
  ])



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
  speakers.toJSON(),
);
config.collections.push(
  pages.toJSON(),
);

export default config;
