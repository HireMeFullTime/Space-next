import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-mobile': "url('../public/home/background-home-mobile.jpg')",
        'home-tablet': "url('../public/home/background-home-tablet.jpg')",
        'home-desktop': "url('../public/home/background-home-desktop.jpg')",
        'destination-mobile': "url('../public/destination/background-destination-mobile.jpg')",
        'destination-tablet': "url('../public/destination/background-destination-tablet.jpg')",
        'destination-desktop': "url('../public/destination/background-destination-desktop.jpg')",
        'crew-mobile': "url('../public/crew/background-crew-mobile.jpg')",
        'crew-tablet': "url('../public/crew/background-crew-tablet.jpg')",
        'crew-desktop': "url('../public/crew/background-crew-desktop.jpg')",
        'technology-mobile': "url('../public/technology/background-technology-mobile.jpg')",
        'technology-tablet': "url('../public/technology/background-technology-tablet.jpg')",
        'technology-desktop': "url('../public/technology/background-technology-desktop.jpg')",
      },
      fontFamily: {
        "barlow": ["var(--font-barlow)"],
        "barlow_condensed": ["var(--font-barlow-condensed)"],
        "bellefair": ["var(--bellefair)"]
      },

      screens: {
        "xs": "375px",
        'xl': '1440px',
        'high-dpi': { 'raw': '(min-resolution: 144dpi)' }
      },
    },
  },
  plugins: [],
};
export default config;

