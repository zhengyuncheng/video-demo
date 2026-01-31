/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '360px',    // 小型手机
        'sm': '640px',    // 中型手机
        'md': '768px',    // 平板
        'lg': '1024px',   // 笔记本
        'xl': '1280px',   // 桌面
        '2xl': '1536px',  // 大型桌面
      },
    },
  },
  plugins: [],
}