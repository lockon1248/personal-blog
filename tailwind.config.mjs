/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'custom-beige': '#F1ECE0',
				'gold-100': '#D9BB73' // 自定义颜色
			}
		}
	},
	plugins: []
};
