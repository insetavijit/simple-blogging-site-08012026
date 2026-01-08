module.exports = function(eleventyConfig) {
  // Layout aliases for cleaner frontmatter
  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
  
  // Passthrough copy for compiled assets and static files
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy({ "src/assets/fonts": "assets/fonts" });
  
  // Copy Bootstrap JS to output
  eleventyConfig.addPassthroughCopy({
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js": "assets/js/bootstrap.bundle.min.js"
  });
  
  // Watch targets for live reload during development
  eleventyConfig.addWatchTarget("src/assets/scss/");
  eleventyConfig.addWatchTarget("src/assets/js/");
  
  // Add a shortcode for current year (useful for copyrights)
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  
  // Add a filter to format dates
  eleventyConfig.addFilter("dateFormat", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "../_includes",
      data: "../_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true
  };
};
