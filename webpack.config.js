const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const autoprefixer = require('autoprefixer');
//const miniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  mode: 'production', //production
  entry: {
  	index: path.resolve(__dirname, './src/js/index.js')
  },
  output: {
  	path: path.resolve(__dirname + '/dist'),
  	filename: 'js/[name].js'
  },
  module: {
  	rules: [
      {
      	test: /\.js$/,
      	loader: 'babel-loader',
      	exclude: path.resolve(__dirname, 'node_modules'),
      	query: {
      		'presets': ['latest']
      	}
      },

      {
      	test: /\.tpl$/,
      	loader: 'ejs-loader'
      },
      {
        test: /\.css$/,
        use:[
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
         //  {
         //  	loader: miniCssExtractPlugin.loader,
	        //   options: {
	        // 	  hmr: process.env.NODE_ENV === 'development'
	        //   }
	        // },
	        'style-loader',
	        'css-loader',
	        {
	        	loader: 'postcss-loader',
	        	options: {
	        		plugins: function () {
	        			return [autoprefixer('last 5 versions')]
	        		}
	        	}
	        },
	        'sass-loader'
        ]
      },

      {
      	test: /\.(png|jpg|jpeg|gif|ico)$/i,
      	loader: [
          'url-loader?limit=1024&name=img/[name]-[hash:16].[ext]',
          'image-webpack-loader'
      	]
      },
      { test:/\.vue$/, use:'vue-loader'}
  	]
  },

  plugins: [
    new uglify(),
    new VueLoaderPlugin(),
    new htmlWebpackPlugin({
      minify: {
      	removeComments: true,
      	collapseWhitespace: true
      },
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
      title: '首页',
      chunksSortMode: 'manual',
      chunks: ['index'],
      excludeChunks: ['node_modules'],
      hash: true
    })
  ],

  devServer: {
  	watchOptions: {
  		ignored: /node_modules/
  	},
  	host: 'localhost',
  	port: 3200
  },
  // 设置 vue 被导入时的包的路径
  resolve:{
    // alias:{
    //   "vue$":"vue/dist/vue.js"
    // }
  }
};

module.exports = config;






