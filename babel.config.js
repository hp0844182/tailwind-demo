const presets = [
  '@babel/env', // 用来将现有代码转换成某个版本代码
  '@babel/preset-react', // 转换jsx
  '@babel/typescript', // 解析typescript
]
const plugins = [
  'react-hot-loader/babel',
  [
    '@dr.pogodin/babel-plugin-react-css-modules',
    {
      generateScopedName: '[path][name]__[local]',
      webpackHotModuleReloading: true,
      handleMissingStyleName: 'warn',
      filetypes: {
        '.scss': {
          syntax: 'postcss-scss',
        },
      },
    },
  ],
]
module.exports = { presets, plugins }
