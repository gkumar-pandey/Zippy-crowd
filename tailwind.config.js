/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            blue: "#007bff",
            indigo: "#6610f2",
            purple: "#6f42c1",
            pink: "#e83e8c",
            red: "#dc3545",
            orange: "#fd7e14",
            yellow: "#ffc107",
            green: "#28a745",
            teal: "#20c997",
            cyan: "#17a2b8",
            white: "#fff",
            gray: "#6c757d",
            grayDark: "#343a40",
            primary: "#007bff",
            secondary: "#6c757d",
            success: "#28a745",
            info: "#17a2b8",
            warning: "#ffc107",
            danger: "#dc3545",
            light: "#f8f9fa",
            dark: "#343a40",
        },

        extend: {
            fontFamily: {
                sans: ["Inter var", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                blue: colors.blue,
                cyan: colors.cyan,
            },
        },
        screens: {
            sm: { max: "500px" },
            // => @media (min-width: 640px and max-width: 767px) { ... }

            md: { min: "501px", max: "768px" },
            // => @media (min-width: 768px and max-width: 1023px) { ... }

            lg: { min: "769px", max: "1024px" },
            // => @media (min-width: 1024px and max-width: 1279px) { ... }

            xl: { min: "1025px", max: "1440px" },
            // => @media (min-width: 1280px and max-width: 1535px) { ... }

            "2xl": { min: "1441px" },
            // => @media (min-width: 1536px) { ... }
        },
    },
    plugins: [require("@tailwindcss/typography")],
}
