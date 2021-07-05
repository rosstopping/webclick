const htmlmin = require("html-minifier");

module.exports = (config) => {
	config.addPassthroughCopy("src/images");

	config.addFilter("limit", (items, limit) => items.slice(0, limit));
	config.addFilter("category", (items, category) => items.filter((item) => item.data.category === category));
	config.addFilter("city", (items, city) => items.filter((item) => item.data.city === city));
	config.addFilter("country", (items, country) => items.filter((item) => item.data.country === country));

	config.addTransform("htmlmin", function (content, outputPath) {
		if (outputPath.endsWith(".html")) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true
			});
			return minified;
		}

		return content;
	});

	return {
		dir: {
			input: "src",
		},
    	htmlTemplateEngine: "njk",
	}
};
