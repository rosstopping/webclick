const htmlmin = require("html-minifier");

module.exports = (config) => {
	config.addPassthroughCopy("src/images");
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
