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
      test: '/\.scss$/',
      loaders: ['style','css','sass']
    }]
  },
  resolve: {
    extenstions:['','.js','.jsx']
  },
  devServer:{
    historyApiFallback: true,
    contentBase: './'
  }
};
