module.exports = {
    darkMode: 'class', content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
            },

            fontSize: {
                base: "1.5em",
                sm: "1em",
                md: "1.25em",
                lg: "1.75em"
            },

            transitionDuration: {
                DEFAULT: "600ms",
            },

            transitionTimingFunction: {
                DEFAULT: "cubic-bezier(0.2, 0.8, 0.2, 1)",
            },
        },
    },
    plugins: [],
}