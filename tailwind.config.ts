import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                'xs': '475px',
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                brand: {
                    cyan: '#3994fa',      // 💎 Light Cyan / Aqua
                    sky: '#4FAED8',       // 🌊 Sky Blue
                    medium: '#3994fa',    // 🔵 Medium Blue
                    deep: '#2F6FB5',      // 🔷 Deep Blue
                    'primary-blue': '#3994fa',
                    'deep-blue': '#004aad',
                }
            },
            fontFamily: {
                sans: ['var(--font-jakarta)', 'sans-serif'],
                display: ['var(--font-outfit)', 'sans-serif'],
                mono: ['var(--font-jetbrains)', 'monospace'],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    darkMode: 'class', // Enable class-based dark mode as used in the project
    plugins: [],
};
export default config;
