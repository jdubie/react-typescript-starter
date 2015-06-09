var webpack = require('webpack');

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://localhost:9090',
    'webpack/hot/only-dev-server',
    './src/client'
  ],

  output: {
    path: __dirname + '/local/',
    filename: 'app.js',
    publicPath: 'http://localhost:9090/local/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    /*
    preLoaders: [
      {
        test: /\.ts$/,
        loader: 'tslint'
      },
    ],
    */

    loaders: [
      {
        test: /\.s?css$/,
        loaders: [
          'style-loader',
          'css-loader',
          'autoprefixer-loader?browsers=last 2 version!sass'
        ]
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'ts-loader', 'ts-jsx-loader']
        //loaders: ['react-hot', 'ts-loader', 'tslint', 'ts-jsx-loader']
      },
    ]
  },

  resolve: {
    extensions: ['', '.js', '.scss', '.ts']
  },

  externals: {
    "mixpanel": "mixpanel",
  },

  tslint: {
    //emitErrors: false,
    //failOnHint: true,
  }
}
