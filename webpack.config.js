const path = require("path")
const htmlPlugin = require("html-webpack-plugin")
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin")
const ProgressBarPlugin = require("progress-bar-webpack-plugin")
const devMode = process.env.NODE_ENV === "development"
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const aliyunTheme = require("@ant-design/aliyun-theme")
const { getThemeVariables } = require("antd/dist/theme")

module.exports = {
  entry: {
    app: path.join(__dirname, "src/index.js")
  },
  output: {
    filename: "boundle.js",
    path: path.join(__dirname, "dist")
  },
  devServer: {
    hot: true,
    host: "0.0.0.0",
    port: "3001",
    overlay: true,
    quiet: true,
    // stats: {
    //   colors: true,
    //   hash: false,
    //   version: false,
    //   builtAt: false,
    //   timings: true,
    //   assets: false,
    //   chunks: false,
    //   modules: false,
    //   reasons: false,
    //   children: false,
    //   source: false,
    //   errors: false,
    //   errorDetails: false,
    //   warnings: false,
    //   publicPath: false
    // },
    proxy: {
      "/up": {
        target: "https://coooe.oss-cn-beijing.aliyuncs.com/",
        pathRewrite: { "^/up": "" }
      },
      "/graphql": {
        target: "https://pvipcrm.meishubao.com",
        changeOrigin: true
        // pathRewrite: {'^/up' : ''}
      },
      "/dapi": {
        target: "http://127.0.0.1:9003",
        changeOrigin: true,
        pathRewrite: {'^/dapi' : ''}
      },
      "/tapi": {
        target: "http://tgql.meishubao.com",
        changeOrigin: true,
        pathRewrite: {'^/tapi' : ''}
      },
      "/dgql": {
        target: "http://127.0.0.1:9003/boss",
        changeOrigin: true,
        pathRewrite: {'^/dgql' : ''}
      },
      "/tgql": {
        target: "http://tgql.meishubao.com/boss",
        changeOrigin: true,
        pathRewrite: {'^/tgql' : ''}
      },
      "/pgql": {
        target: "http://pgql.meishubao.com/boss",
        changeOrigin: true,
        pathRewrite: {'^/pgql' : ''}
      },
      "/gql": {
        target: "http://gql.meishubao.com/boss",
        changeOrigin: true,
        pathRewrite: {'^/gql' : ''}
      }
    }
  },
  resolve: {
    extensions: [".js"],
    alias: {
      "@": path.resolve("src")
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.join(__dirname, "node_modules"),
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // only enable hot in development
              hmr: devMode,
              // if hmr does not work, this is a forceful method.
              reloadAll: true
            }
          },
          { loader: "css-loader", options: { sourceMap: devMode } },
          { loader: "postcss-loader", options: { sourceMap: devMode ? "inline" : false } } // 注意这里是 inline
        ]
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // only enable hot in development
              hmr: devMode,
              // if hmr does not work, this is a forceful method.
              reloadAll: true
            }
          },
          { loader: "css-loader", options: { sourceMap: devMode } },
          { loader: "postcss-loader", options: { sourceMap: devMode ? "inline" : false } }, // 注意这里是 inline
          {
            loader: "less-loader",
            // options: {
            //   sourceMap: devMode,
            //   lessOptions: {
            //     modifyVars: aliyunTheme.default,
            //     javascriptEnabled: true
            //   }
            // }
            options: {
              lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
                modifyVars: {
                  // ...aliyunTheme.default,
                  '@primary-color': '#fa541c',
                  '@font-size-sm': '12px',
                  '@font-size-base': '12px',
                  // ...getThemeVariables({
                  //   dark: false, // 开启暗黑模式
                  //   compact: true // 开启紧凑模式
                  // })
                },
                javascriptEnabled: true
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
      // {
      //   test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      //   use: ["file-loader"]
      // }
    ]
  },
  plugins: [
    new htmlPlugin({
      filename: "index.html",
      template: path.join(__dirname, "index.html")
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[name].css",
      ignoreOrder: true
    }),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`Your application is running here: http://localhost:3000`]
      },
      onErrors: undefined,
      clearConsole: true
    }),
    new ProgressBarPlugin(),
    // new HardSourceWebpackPlugin(),
    new ReactRefreshWebpackPlugin()
  ]
}
