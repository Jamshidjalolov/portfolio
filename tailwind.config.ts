import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      colors: {
        night: '#040816',
        surface: '#091124',
        line: '#173050',
        accent: '#67e8f9',
        warm: '#f5b75f',
      },
      boxShadow: {
        glow: '0 24px 80px rgba(56, 189, 248, 0.18)',
        warm: '0 28px 90px rgba(245, 183, 95, 0.14)',
        panel: '0 18px 40px rgba(4, 8, 22, 0.45)',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(circle at top, rgba(56,189,248,0.18), transparent 40%), radial-gradient(circle at 80% 20%, rgba(245,183,95,0.12), transparent 22%)',
      },
    },
  },
  plugins: [],
} satisfies Config;

