/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Marcellus', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#F5C518',
          100: '#FFF4C2',
          200: '#FFE38A',
          300: '#FFD34F',
          400: '#FDCB2A',
          500: '#F5C518',
          600: '#D7A907',
          700: '#A07C05',
          800: '#6B5403',
          900: '#3F3201'
        }
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(0,0,0,0.35)'
      },
      backgroundImage: {
        'noise': "url('/noise.svg')",
        'hero': "url('https://images.unsplash.com/photo-1502209877429-d9b0ef75b062?q=80&w=2400&auto=format&fit=crop')"
      }
    },
  },
  plugins: [],
}
