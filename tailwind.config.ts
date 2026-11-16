import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#F7F5F0',
          surface: '#FFFFFF',
          ink: '#121212',
          muted: '#5C5A55',
          border: '#E2DFD7',
          crimson: '#8B1E1E',
          crimsonHover: '#6E1616',
        },
      },
    },
  },
  plugins: [],
};

export default config;