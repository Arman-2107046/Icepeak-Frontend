/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['Libre Baskerville', 'serif'],
                dmserif: ['DM Serif Text', 'serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'), // added typography plugin
    ],
}