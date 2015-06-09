module.exports = {
  entry: "./src/client",

  output: {
    path: __dirname + "/prod/",
    filename: "app.js"
  },

  module: {
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
        loaders: ["ts-loader", "ts-jsx-loader"]
      },
    ]
  },

  resolve: {
    extensions: ['', '.js', '.scss', '.ts']
  },

  externals: {
    "react": "React"
  }

}
