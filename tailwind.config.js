import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	mode: 'jit',
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				text: {
					light: '#FFFFFF',
					DEFAULT: '#FFFFFF',
					dark: '#78766F'
				},
				primary: {
					light: '#d9ff45',
					DEFAULT: '#CFFF12',
					dark: '#b1de00'
				},
				background: {
					dark: '#07090E',
					DEFAULT: '#07090E'
				},
				dark: {
					light: '#303030',
					DEFAULT: '#07090E'
				}
			}
		},
		fontFamily: {
			sans: ['Satoshi', ...defaultTheme.fontFamily.sans],
			serif: ['Satoshi', ...defaultTheme.fontFamily.serif],
			mono: ['Satoshi', ...defaultTheme.fontFamily.mono]
		}
	},
	plugins: []
};
