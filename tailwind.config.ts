/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#000b22',
          900: '#001134',
          800: '#001a4d',
          700: '#002266',
          600: '#002c80',
        },
        ember: {
          600: '#b83f1a',
          500: '#DC5326',
          400: '#e86b42',
          300: '#f08965',
          200: '#f5b39a',
          100: '#fae3da',
        },
        sky: {
          electric: '#6ec1e4',
          dim: '#4a9fc4',
          pale: '#b5dff1',
        },
        neutral: {
          50: '#f8f8f8',
          100: '#d4d4d4',
          200: '#b0b0b0',
          300: '#8a8a8a',
          400: '#666666',
          500: '#444444',
          600: '#2a2a2a',
          700: '#1a1a1a',
          800: '#111111',
          900: '#080808',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
        display: ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-sm': ['clamp(1.8rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      spacing: {
        section: 'clamp(5rem, 10vw, 9rem)',
        container: 'clamp(1.5rem, 5vw, 3rem)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': `
          radial-gradient(at 40% 20%, hsla(220,100%,10%,1) 0px, transparent 50%),
          radial-gradient(at 80% 0%, hsla(215,90%,8%,1) 0px, transparent 50%),
          radial-gradient(at 0% 50%, hsla(220,100%,5%,1) 0px, transparent 50%)
        `,
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          from: { boxShadow: '0 0 20px rgba(220,83,38,0.2), 0 0 40px rgba(110,193,228,0.1)' },
          to: { boxShadow: '0 0 40px rgba(220,83,38,0.4), 0 0 80px rgba(110,193,228,0.2)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-ember': '0 0 30px rgba(220,83,38,0.3)',
        'glow-sky': '0 0 30px rgba(110,193,228,0.25)',
        'glow-navy': '0 0 40px rgba(0,17,52,0.8)',
        'card': '0 1px 3px rgba(0,0,0,0.4), 0 8px 32px rgba(0,0,0,0.3)',
        'card-hover': '0 2px 8px rgba(0,0,0,0.5), 0 16px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(110,193,228,0.15)',
        'inner-light': 'inset 0 1px 0 rgba(255,255,255,0.08)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
