/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-dark": "var(--primary-dark)",
        "bg-light": "var(--bg-color)",
        "card-bg": "var(--card-bg)",
        "text-dark": "var(--text-dark)",
        "text-light": "var(--text-light)",
      },
    },
  },
  plugins: [],
}; 