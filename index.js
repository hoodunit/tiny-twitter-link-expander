var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "https://twitter.com*",
  contentScriptFile: "./content-script.js"
});
