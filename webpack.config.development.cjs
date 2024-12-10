const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const isDevelopment = process.env.NODE_ENV !== 'production';
const port = 2710;

/**
 * @type {webpack.WebpackPluginInstance[]}
 */
const plugins = [
  new HtmlWebpackPlugin({
    template: "public/index.html",
    favicon: "public/favicon.ico",
  }),
];

/**
 * @type {import("webpack-dev-server").Configuration}
 */
const devServer = {
  host: "localhost",
  port,
  historyApiFallback: true,
  open: false,
  hot: true,
};

/**
 * @type {import("webpack/types").Configuration}
 */
module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: "inline-source-map",
  entry: {
    app: "./src/index.js",
  },
  devServer: devServer,
  output: {
    filename: "[name].[hash].js",
    clean: true,
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".js", ".jsx", ".json", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
          },
        }],
      },
    ],
  },
  plugins: plugins,
};
