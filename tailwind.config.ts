import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0F6B3E',
          secondary: '#5DBB63',
          accent: '#0A84FF',
          sun: '#FF5C2B',
          dark: '#0E1116',
          light: '#FFFFFF',
        },
        paper: '#F4F6F1',
        ink: {
          900: '#14171C',
          800: '#22262E',
          700: '#333944',
          600: '#525A66',
          500: '#6E7782',
          400: '#9098A2',
          300: '#BCC2CA',
          200: '#DDE1E4',
          100: '#ECEEEF',
          50: '#F6F7F8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'Poppins', 'system-ui', 'sans-serif'],
        display: ['SF Pro Display', 'Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(3.5rem, 7vw, 6.5rem)', { lineHeight: '0.98', letterSpacing: '-0.04em', fontWeight: '700' }],
        'display-xl': ['clamp(2.75rem, 5.5vw, 5rem)', { lineHeight: '1.02', letterSpacing: '-0.035em', fontWeight: '700' }],
        'display-lg': ['clamp(2.25rem, 4.5vw, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '600' }],
        'display-md': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '600' }],
      },
      backgroundImage: {
        'grid-fade': 'radial-gradient(ellipse at top, rgba(15,107,62,0.18), transparent 60%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'shimmer': 'shimmer 2.4s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'wheel': 'wheel 1.4s linear infinite',
        'sway': 'sway 3.5s ease-in-out infinite',
        'drift': 'drift 60s linear infinite',
        'puff': 'puff 2.2s ease-out infinite',
      },
      keyframes: {
        wheel: { '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } },
        sway: { '0%,100%': { transform: 'rotate(-3deg)' }, '50%': { transform: 'rotate(3deg)' } },
        drift: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(120px)' } },
        puff: {
          '0%': { transform: 'translateY(0) scale(0.6)', opacity: '0' },
          '20%': { opacity: '0.6' },
          '100%': { transform: 'translateY(-40px) scale(1.6)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'glow-primary': '0 0 60px -10px rgba(15, 107, 62, 0.5)',
        'glow-accent': '0 0 60px -10px rgba(10, 132, 255, 0.4)',
        'card': '0 1px 2px rgba(15,17,22,0.04), 0 12px 36px -12px rgba(15,17,22,0.12)',
        'card-hover': '0 2px 4px rgba(15,17,22,0.06), 0 24px 60px -20px rgba(15,17,22,0.18)',
      },
    },
  },
  plugins: [],
};

export default config;
