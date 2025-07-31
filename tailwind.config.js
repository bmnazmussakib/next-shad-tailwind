/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",      // Next.js 13+ app dir
    "./pages/**/*.{js,ts,jsx,tsx}",    // pages dir, যদি থাকে
    "./components/**/*.{js,ts,jsx,tsx}" // components
  ],
  theme: {
    extend: {
      colors: {
        'nexcent-primary': 'var(--nexcent-primary)',
        'nexcent-secondary': 'var(--nexcent-secondary)',
        'nexcent-info': 'var(--nexcent-info)',
        'nexcent-black': 'var(--nexcent-black)',
        'nexcent-d-grey': 'var(--nexcent-d-grey)',
        'nexcent-grey': 'var(--nexcent-grey)',
        'nexcent-l-grey': 'var(--nexcent-l-grey)',
        'nexcent-grey-blue': 'var(--nexcent-grey-blue)',
        'nexcent-silver': 'var(--nexcent-silver)',
        'nexcent-white': 'var(--nexcent-white)',

        'nexcent-shade-1': 'var(--nexcent-shade-1)',
        'nexcent-shade-2': 'var(--nexcent-shade-2)',
        'nexcent-shade-3': 'var(--nexcent-shade-3)',
        'nexcent-shade-4': 'var(--nexcent-shade-4)',
        'nexcent-shade-5': 'var(--nexcent-shade-5)',

        'nexcent-tint-1': 'var(--nexcent-tint-1)',
        'nexcent-tint-2': 'var(--nexcent-tint-2)',
        'nexcent-tint-3': 'var(--nexcent-tint-3)',
        'nexcent-tint-4': 'var(--nexcent-tint-4)',
        'nexcent-tint-5': 'var(--nexcent-tint-5)',

        'nexcent-warning': 'var(--nexcent-warning)',
        'nexcent-error': 'var(--nexcent-error)',
        'nexcent-success': 'var(--nexcent-success)',
      },
      boxShadow: {
        'nexcent-sm': 'var(--nexcent-shadow-2)',
        'nexcent-md': 'var(--nexcent-shadow-4)',
        'nexcent-lg': 'var(--nexcent-shadow-6)',
        'nexcent-xl': 'var(--nexcent-shadow-8)',
        'nexcent-2xl': 'var(--nexcent-shadow-16)',
      },
      fontSize: {
        'nexcent-headline-1': ['64px', '76px'],
        'nexcent-headline-2': ['36px', '44px'],
        'nexcent-headline-3': ['28px', '36px'],
        'nexcent-headline-4': ['20px', '28px'],
        'nexcent-body-1': ['18px', '28px'],
        'nexcent-body-2': ['16px', '24px'],
        'nexcent-body-3': ['14px', '20px'],
        'nexcent-body-4': ['12px', '16px'],
      },
    },
  },
  plugins: [],
};
