const path = require("path")
const htmlPlugin = require("html-webpack-plugin")
const { getThemeVariables } = require("antd/dist/theme")
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin")
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin")
const ProgressBarPlugin = require("progress-bar-webpack-plugin")
const devMode = process.env.NODE_ENV === "development"
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

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
    port: "3000",
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
            loader: "less-loader", options: {
              sourceMap: devMode,
              lessOptions: {
                modifyVars: { "@primary-color": "#096dd9" },
                javascriptEnabled: true
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new htmlPlugin({
      filename: "index.html",
      template: path.join(__dirname, "index.html")
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
