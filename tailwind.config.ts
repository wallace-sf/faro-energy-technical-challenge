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
      }
    },
  },
  plugins: [flowbitePlugin],
} satisfies Config;
