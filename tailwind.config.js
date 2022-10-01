/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		container: {
			center: true,
		},
	},
	variants: {
		extend: {
			visibility: ["group-hover"],
		},
	},
	plugins: [require("flowbite/plugin")],
};
