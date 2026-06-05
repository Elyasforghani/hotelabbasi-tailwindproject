/** @type {import('tailwindcss').Config} */
module.exports = {
  // ۱. در این بخش مشخص کنید تلویند کدام فایل‌ها را برای کلاس‌ها جستجو کند
  content: ["./*.html", "./js/**/*.js"], 
  theme: {
    extend: {
      // ۲. تنظیمات اختصاصی هتل عباسی که کپی کردید:
      fontFamily: {
        sans: ['Vazirmatn', 'sans-serif'],
      },
      colors: {
        gold: {
          50: '#fdfbf7',
          100: '#fbf4ea',
          500: '#c5a880', /* طلایی اختصاصی عباسی */
          600: '#b0926a',
          700: '#8e714b',
        },
        emerald: {
          900: '#064e3b', /* سبز صفوی */
          950: '#022c22',
        }
      }
    },
  },
  plugins: [],
}