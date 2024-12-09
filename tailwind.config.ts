import type { Config } from 'tailwindcss';

const colors = {
  background: '#0a0a0a',
  text: '#ededed',
  primary: '#2ef2ff',
  secondary: '#c026d3',
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: colors.background,
        text: colors.text,
        primary: colors.primary,
        secondary: colors.secondary,
      },
      backgroundImage: {
        gradient: `linear-gradient(45deg, ${colors.background}, 80%, ${colors.primary})`,
        'background-gradient': `linear-gradient(60deg, ${colors.primary}, 1%, ${colors.background})`,
      },
    },
  },
  plugins: [],
};
export default config;
