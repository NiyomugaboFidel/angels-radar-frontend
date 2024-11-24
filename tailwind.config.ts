import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primaryColor":"#073763",
        "secondaryColor":"#00D566",
        "color1":"#201E1E",
        "color2":"#616771"
      },
      backgroundImage: {
        'form-bg': "url('/images/background.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
