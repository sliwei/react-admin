const path = require("path")
const htmlPlugin = require("html-webpack-plugin")
const { getThemeVariables } = require("antd/dist/theme")
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpack = require('webpack')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const portfinder = require('portfinder');

const devWebpackConfig = {
  mode: 'development',
  devtool: '#cheap-module-eval-source-map',
  entry: './src/index.js',
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve('src'),
    },
  },
  output: {
    publicPath: '/'
  },
  devServer: {
    hot: true,
    host: "0.0.0.0",
    port: "3000",
    clientLogLevel: 'warning',
    historyApiFallback: {rewrites: {from: /.*/, to: '/index.html'}},
    // contentBase: path.join(__dirname, '..', 'dll'), // 静态文件根目录
    compress: true,
    open: false,
    overlay: {warnings: false, errors: true},
    publicPath: '/',
    quiet: true,
    watchOptions: {poll: false},
    proxy: {
      '/up': {
        target: 'https://coooe.oss-cn-beijing.aliyuncs.com/',
        pathRewrite: {'^/up' : ''}
      },
      '/graphql': {
        target: 'https://pvipcrm.meishubao.com',
        changeOrigin: true,
        // pathRewrite: {'^/up' : ''}
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.join(__dirname, "node_modules"),
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                modifyVars: { "@primary-color": "#096dd9" },
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/),
    // new BundleAnalyzerPlugin(),
    new htmlPlugin({
      template: path.resolve(__dirname, '..', 'index.html'),
      filename: 'index.html',
    }),
    new ReactRefreshWebpackPlugin(),
  ],
}
module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = 3000;
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err);
    } else {
      // add port to devServer config
      devWebpackConfig.devServer.port = port;

      // Add FriendlyErrorsPlugin
      let host = devWebpackConfig.devServer.host;
      host = host === '0.0.0.0' ? 'localhost' : host;
      devWebpackConfig.plugins.push(
        new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: [`Your application is running here: http://${host}:${port}`],
          },
          onErrors: (severity, errors) => {
            for (let error of errors) {
              console.error(error.webpackError);
            }
          },
        }),
      );
      resolve(devWebpackConfig);
    }
  });
});

