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
        'home-mobile': "url('../app/assets/home/background-home-mobile.jpg')",
        'home-tablet': "url('../app/assets/home/background-home-tablet.jpg')",
        'home-desktop': "url('../app/assets/home/background-home-desktop.jpg')",
        'destination-mobile': "url('../app/assets/destination/background-destination-mobile.jpg')",
        'destination-tablet': "url('../app/assets/destination/background-destination-tablet.jpg')",
        'destination-desktop': "url('../app/assets/destination/background-destination-desktop.jpg')",
        'crew-mobile': "url('../app/assets/crew/background-crew-mobile.jpg')",
        'crew-tablet': "url('../app/assets/crew/background-crew-tablet.jpg')",
        'crew-desktop': "url('../app/assets/crew/background-crew-desktop.jpg')",
        'technology-mobile': "url('../app/assets/technology/background-technology-mobile.jpg')",
        'technology-tablet': "url('../app/assets/technology/background-technology-tablet.jpg')",
        'technology-desktop': "url('../app/assets/technology/background-technology-desktop.jpg')",
      },
      fontFamily: {
        "barlow": ["var(--font-barlow)"],
        "barlow_condensed": ["var(--font-barlow-condensed)"],
        "bellefair": ["var(--bellefair)"]
      },

      screens: {
        "xs": "375px",
        'xl': '1440px',
      },
    },
  },
  plugins: [],
};
export default config;

