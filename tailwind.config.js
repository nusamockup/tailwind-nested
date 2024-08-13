module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,html}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                dark: {
                    DEFAULT: '#1a202c',
                    100: '#2d3748',
                    200: '#4a5568',
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ],
}