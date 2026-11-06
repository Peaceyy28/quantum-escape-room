/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          dark: '#070B18',
          card: '#10182B',
          glass: 'rgba(16, 24, 43, 0.75)',
          terminal: '#0A0F1D'
        },
        primary: {
          DEFAULT: '#7867FF',
          hover: '#6453ee',
          glow: 'rgba(120, 103, 255, 0.4)'
        },
        accent: {
          cyan: '#35D9F2',
          glow: 'rgba(53, 217, 242, 0.4)'
        },
        game: {
          text: '#F4F6FF',
          muted: '#9AA6C2',
          success: '#40DCA1',
          error: '#FF637D',
          warning: '#F59E0B'
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'Fira Code', 'Menlo', 'monospace'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-primary': '0 0 25px -5px rgba(120, 103, 255, 0.5)',
        'glow-cyan': '0 0 25px -5px rgba(53, 217, 242, 0.5)',
        'glow-success': '0 0 25px -5px rgba(64, 220, 161, 0.5)',
        'glow-error': '0 0 25px -5px rgba(255, 99, 125, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' }
        }
      }
    },
  },
  plugins: [],
}
