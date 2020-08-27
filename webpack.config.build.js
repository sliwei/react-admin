const path = require("path")
const htmlPlugin = require("html-webpack-plugin")
const ProgressBarPlugin = require("progress-bar-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const devMode = process.env.NODE_ENV === "development"
const TerserJSPlugin = require("terser-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const webpack = require("webpack")
const aliyunTheme = require("@ant-design/aliyun-theme")
// const aliyunTheme = require('@ant-design/aliyun-theme')
const { getThemeVariables } = require("antd/dist/theme")

// console.log(aliyunTheme)
module.exports = {
  entry: {
    app: path.join(__dirname, "src/index.js")
  },
  output: {
    filename: "boundle.js",
    path: path.join(__dirname, "dist")
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
                  ...aliyunTheme.default,
                  ...getThemeVariables({
                    dark: false, // 开启暗黑模式
                    compact: true // 开启紧凑模式
                  })
                },
                javascriptEnabled: true
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/),
    new htmlPlugin({
      filename: "index.html",
      template: path.join(__dirname, "index.html")
    }),
    // 模板
    // new htmlPlugin({
    //   template: path.resolve(__dirname, './index.html'),
    //   filename: 'index.html',
    //   inject: true,
    //   minify: {
    //     removeComments: true,
    //     collapseWhitespace: true,
    //     removeAttributeQuotes: true
    //   },
    // }),
    // 压缩CSS插件
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
      ignoreOrder: true
    }),
    new ProgressBarPlugin(),
    new BundleAnalyzerPlugin()
  ],
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
  }
}
