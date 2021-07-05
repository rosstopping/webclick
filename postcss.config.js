module.exports = {
	purge: [
		'./*.html',
	],
	plugins: {
		cssnano: {
			preset: 'default'
		},
		tailwindcss: {},
		autoprefixer: {},
	}
}