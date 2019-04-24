/*global require module __dirname*/
const path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = (env, options) => {
   const isProduction = options.mode === 'production'

   return {
      entry: './src/index.js',
      output: {
         path: path.join(__dirname, 'public', 'dist'),
         filename: 'bundle.js',
      },
      module: {
         rules: [
            {
               loader: 'babel-loader',
               test: /\.js$/,
               exclude: /node_modules/,
            },
            {
               test: /\.s?css$/,
               use: [
                  MiniCssExtractPlugin.loader,
                  {
                     loader: 'css-loader',
                     options: { sourceMap: true },
                  },
                  {
                     loader: 'postcss-loader',
                     options: {
                        plugins: () => [
                           require('autoprefixer')({
                              browsers: ['> 1%', 'last 2 versions'],
                           }),
                        ],
                     },
                  },
                  {
                     loader: 'sass-loader',
                     options: { sourceMap: true },
                  },
               ],
            },
         ],
      },
      optimization: {
         minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
      },
      plugins: [new MiniCssExtractPlugin({ filename: 'styles.css' })],
      devtool: isProduction ? 'source-map' : 'inline-source-map',
      devServer: {
         overlay: true,
         proxy: {
            '/api/v1/**': {
               target: 'https://frontend-test-assignment-api.abz.agency/',
               secure: false,
               changeOrigin: true,
            },
         },
         contentBase: path.join(__dirname, 'public'),
         historyApiFallback: true,
         publicPath: '/dist/',
      },
   }
}
