/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},

	daisyui: {
		themes: [
			{
				customeTheme: {
					primary: '#e879f9',

					secondary: '#7dd3fc',

					accent: '#a78bfa',

					neutral: '#f1f5f9',

					'base-100': '#1e293b',

					info: '#3ABFF8',

					success: '#36D399',

					warning: '#FBBD23',

					error: '#F87272'
				}
			}
		]
	},

	plugins: [require('daisyui')]
};
