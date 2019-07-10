module.exports = function(config) {
  config.addCollection("posts", collection => {
    return collection.getFilteredByGlob("posts/*.md");
  });

  config.addFilter("lookup", require("./filters/lookup.js"));

  return {
    dir: {
      input: ".",
      output: "dist",
      includes: "templates"
    },
    templateFormats: ["html", "md", "css"],
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid"
  };
};
