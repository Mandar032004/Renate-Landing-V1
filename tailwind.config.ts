import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        funnel: ["'Funnel Display'", 'sans-serif'],
      },
      colors: {
        purple: {
          DEFAULT: '#9156EC',
          dark: '#3F1487',
          light: '#D4B9FF',
          logo: '#A974FF',
        },
        'text-primary': '#263238',
        'text-secondary': '#607D8B',
        'text-nav': '#455A64',
        'bg-light': '#F5F7F8',
        'bg-border': '#CFD8DC',
      },
      borderRadius: {
        section: '40px',
        card: '32px',
        badge: '16px',
        center: '48px',
        'btn-lg': '12px',
        'btn-sm': '8px',
      },
      boxShadow: {
        navbar: '0 0 32px 0 rgba(212,185,255,0.4)',
        glow: '0 0 120px 0 rgba(212,185,255,0.8)',
        card: '0 0 32px 0 rgba(212,185,255,0.4)',
      },
      backgroundImage: {
        'grad-purple': 'linear-gradient(135deg, #9156EC 0%, #3F1487 100%)',
        'grad-blue': 'linear-gradient(135deg, #9156EC 0%, #0062FF 100%)',
        'grad-logo': 'linear-gradient(135deg, #A974FF 0%, #401583 100%)',
        'grad-badge': 'linear-gradient(135deg, #FBF8FF 0%, #E7DAFB 100%)',
        'grad-badge-dark': 'linear-gradient(135deg, rgba(212,185,255,0.08) 0%, rgba(145,86,236,0.24) 100%)',
        'grad-page': 'radial-gradient(ellipse at 50% 0%, #FFFFFF 40%, #EADCFF 100%)',
        'grad-tab': 'linear-gradient(135deg, #D4B9FF 0%, #9156EC 100%)',
        'grad-cta-btn': 'linear-gradient(135deg, #F5F7F8 0%, #D4B9FF 100%)',
        'grad-stats': 'linear-gradient(135deg, #FBF8FF 0%, #E7DAFB 100%)',
        'grad-logo-mark': 'linear-gradient(135deg, #A974FF 0%, #401583 100%)',
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
}

export default config
