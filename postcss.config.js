export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 375, // 设计稿宽度（基准）
      viewportHeight: 667, // 设计稿高度
      unitPrecision: 5, // 单位精度
      viewportUnit: 'vw', // 转换后的单位
      selectorBlackList: [], // 不需要转换的选择器
      minPixelValue: 1, // 最小转换值
      mediaQuery: false // 是否在媒体查询中转换
    }
  },
}