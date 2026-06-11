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
          950: '#00060f',
          900: '#000d1a',
          800: '#001226',
          700: '#001a33',
          600: '#002240',
        },
        neon: {
          500: '#00D97E',
          400: '#00F090',
          300: '#4DFFA8',
          200: '#99FFCC',
          100: '#CCFFE5',
          glow: 'rgba(0,217,126,0.35)',
        },
        frost: {
          50:  '#F0F4FF',
          100: '#E8EDF5',
          200: '#C8D3E8',
          300: '#A0B0CC',
          400: '#7888A8',
          500: '#506080',
          600: '#304060',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'glow':       'glow 3s ease-in-out infinite alternate',
        'marquee':    'marquee 30s linear infinite',
        'scan':       'scan 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-14px)' },
        },
        glow: {
          from: { boxShadow: '0 0 20px rgba(0,217,126,0.2)' },
          to:   { boxShadow: '0 0 50px rgba(0,217,126,0.5)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        scan: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(400%)' },
        },
      },
      boxShadow: {
        'glow-neon':  '0 0 30px rgba(0,217,126,0.4), 0 0 60px rgba(0,217,126,0.15)',
        'glow-neon-sm': '0 0 12px rgba(0,217,126,0.3)',
        'card':       '0 1px 3px rgba(0,0,0,0.6), 0 8px 32px rgba(0,0,0,0.4)',
        'card-hover': '0 2px 8px rgba(0,0,0,0.6), 0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,217,126,0.12)',
        'inner-neon': 'inset 0 1px 0 rgba(0,217,126,0.08)',
      },
    },
  },
  plugins: [],
}
