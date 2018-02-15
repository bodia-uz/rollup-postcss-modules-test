const postcss = require('rollup-plugin-postcss');

const debug = true;

export default {
  input: './src/index.js',
  plugins: [
    postcss({
      modules: {
        generateScopedName: debug ? '[name]__[local]___[hash:base64:5]' : '__[hash:base64:5]'
      },
      minimize: true
    })
  ],
  output: {
    file: './dist/bundle.js',
    format: 'umd'
  }
}