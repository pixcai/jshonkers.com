export default {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel!eslint', exclude: /node_modules/ },
      { test: /\.pug$/, loader: 'pug' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.pug']
  },
  target: 'node',
  node: {
    __dirname: true
  },
  externals: [/koa(?=-.+)*/, /socket\.io/]
}
