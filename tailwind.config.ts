import type { Config } from 'tailwindcss';
import flowbitePlugin from 'flowbite/plugin';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        body: '#64748B',
        bodydark: '#AEB7C0',
        stroke: '#E2E8F0',
      },
      maxWidth: {
        '1/2': '50%',
      },
      screens: {
        '4k': '2560px',
      }
    },
  },
  plugins: [flowbitePlugin],
} satisfies Config;
