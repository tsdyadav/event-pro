import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff3fb",
          100: "#ffe5f5",
          300: "#f7a8d8",
          500: "#eb4ea7",
          600: "#cf2d89",
          700: "#a9246d",
        },
        accent: {
          500: "#9c56ff",
          600: "#8247d6",
        },
        ink: {
          900: "#24192f",
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(53, 24, 61, 0.12)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #eb4ea7 0%, #9c56ff 100%)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
