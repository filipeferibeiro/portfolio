/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.vue", "./*.html"],
	theme: {
		fontFamily: {
			sans: ["Montserrat", "sans-serif"],
			secondary: ["Maven Pro", "sans-serif"],
		},
		extend: {
			backgroundImage: {
				"portfolio-gradient": "linear-gradient(to right, #243B55, #141E30)",
			},
			backgroundColor: {
				"portfolio-primary": "#141E30",
			},
			boxShadowColor: {
				"portfolio-primary": "#2A3F65",
			},
		},
	},
	plugins: [],
};
