const path = require('path');

module.exports = {
  entry:[
    './src/index.js'
  ],
  output:{
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module:{
    loaders:[{
      exclude:'/node_modules/',
      loader: 'babel'
    },
    {
      test: /\.scss$/,
      loaders: ['style','css','sass']
    }]
  },
  resolve: {
    extenstions:['','.js','.jsx']
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./sass")]
  },
  devServer:{
    historyApiFallback: true,
    contentBase: './'
  }
};
