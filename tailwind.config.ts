import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'dark': '#1D282D',
        'light': '#F4F3F1',
        'accent': '#DE4E2A',
        'accent-green': '#07EE98'
      },
      fontFamily: {
        slab: ["Roboto Slab", "serif"],
        mono: ["Roboto Mono", "monospace"],
        // 'reg': ['GeistVF', 'sans-serif'],
        // 'mono': ['GeistMonoVF', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
