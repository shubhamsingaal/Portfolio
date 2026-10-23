module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0b1220',
          900: '#10192a',
          800: '#162238',
          700: '#1c2c48',
        },
        accent: {
          DEFAULT: '#2dd4bf',
          dim: '#14b8a6',
          glow: 'rgba(45, 212, 191, 0.25)',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(45, 212, 191, 0.18), 0 20px 60px -20px rgba(45, 212, 191, 0.35)',
        card: '0 0 0 1px rgba(148, 163, 184, 0.12), 0 24px 50px -24px rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(148,163,184,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.07) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
