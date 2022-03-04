module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	theme: {
		extend: {
			fontFamily: {
				roboto: ["Roboto"],
			},
            colors: {
                background: "#2C3333",
                primary: "#395B64",
                secondary: "#2666CF",
                light: "#F5F2E7",
            },
		},
	},
	plugins: [],
};
