/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
	theme: {
	   extend: {
		keyframes: {
            'firefly-move': {
              '0%': {transform: 'translate(0, 0)'},
               '50%': {transform: 'translate(20px, 20px)'},
               '100%': {transform: 'translate(0, 0)'},
         },
         'firefly-flicker': {
                 '0%,100%': {opacity: '0.6'},
               '50%': {opacity: '0.2'},
          }
          },
          animation: {
              'firefly-move': 'firefly-move 2s infinite linear',
            'firefly-flicker': 'firefly-flicker 1s infinite linear'
          }
		},
	   },
	plugins: [],
}