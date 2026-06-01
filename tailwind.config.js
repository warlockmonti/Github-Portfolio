/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'sakura-pink': '#FF9E9E', // More vibrant pink
                'sakura-dark': '#FF7675',
                'deep-indigo': '#2D3436',
                'indigo-dark': '#1E272E',
                'gold': '#FDCB6E',
                'gold-dark': '#E1B12C',
                'paper-white': '#FDFBF7',
                'success': '#00B894',
                'success-dark': '#00A383',
                'error': '#FF7675',
                'error-dark': '#D63031',
            },
            fontFamily: {
                sans: ['Nunito', 'Inter', 'sans-serif'], // Rounder, friendlier font
                jp: ['Noto Sans JP', 'sans-serif'],
            },
            boxShadow: {
                'game-sm': '0 2px 0 0 rgba(0,0,0,0.2)',
                'game-md': '0 4px 0 0 rgba(0,0,0,0.2)',
                'game-lg': '0 6px 0 0 rgba(0,0,0,0.2)',
                'game-xl': '0 8px 0 0 rgba(0,0,0,0.2)',
                'inner-light': 'inset 0 2px 4px 0 rgba(255,255,255,0.3)',
            },
            backgroundImage: {
                'pattern-dots': "radial-gradient(#CBD5E0 1px, transparent 1px)",
            }
        },
    },
    plugins: [],
}
