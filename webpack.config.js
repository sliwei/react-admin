const path = require("path")
const htmlPlugin = require("html-webpack-plugin")
const { getThemeVariables } = require("antd/dist/theme")

module.exports = {
  entry: {
    app: path.join(__dirname, "src/index.js"),
  },
  output: {
    filename: "boundle.js",
    path: path.join(__dirname, "dist"),
  },
  devServer: {
    hot: true,
    host: "0.0.0.0",
    port: "3000",
    // overlay: true,
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
    new htmlPlugin({
      filename: "index.html",
      template: path.join(__dirname, "index.html"),
    }),
  ],
}
