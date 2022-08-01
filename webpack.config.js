const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { options } = require("cssesc");

module.exports = {
  entry: "./src/index.js", // точка входа
  mode: "development",
  output: {
    filename: "main.js",
    // объект с помощью которого мы конфигурируем файл который получается в результате
    //работы нашей команды npx webpack, его мы и подключаем в index.html
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new TerserWebpackPlugin(),
    new OptimizeCssAssetsWebpackPlugin(),
    new HtmlWebpackPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin(),
      new OptimizeCssAssetsWebpackPlugin(),
    ],
  },
  module: {
    rules: [
      {
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
          "css-loader",
        ],
        test: /\.css$/,
      },
      {
        test: /\.html$/,
        use: "html-webpack-plugin",
      },
    ],
  },
};
