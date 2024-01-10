/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                red: '#FF3B30',
                blue: '#00A8C5',
                black: {
                    0: '#2A2A2A',
                    1: '#232424',
                    2: '#1E1E1E',
                    3: '#2E2E2D'
                },
                green: '#00A738'
            }
        },
    },
    plugins: [],
}

