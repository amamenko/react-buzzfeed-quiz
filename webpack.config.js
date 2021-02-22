const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");

module.exports = {
  optimization: {
    minimizer: [new TerserPlugin({ extractComments: false })],
  },
  plugins: [
    new RemoveEmptyScriptsPlugin({ extensions: ["css", "ttf"] }),
    new MiniCssExtractPlugin({
      filename: "./ProximaNova.css",
    }),
  ],
  mode: "production",
  entry: {
    quizValidatorFunction: "./src/quizValidatorFunction.js",
    ReactBuzzFeedQuiz: "./src/ReactBuzzFeedQuiz.js",
    ProximaNovaCSS: "./src/ProximaNova.css",
    ProximaNovaBlack: "./src/ProximaNovaFont/Proxima_Nova_Black.ttf",
    ProximaNovaBold: "./src/ProximaNovaFont/Proxima_Nova_Bold.ttf",
    ProximaNovaRegular: "./src/ProximaNovaFont/Proxima_Nova_Regular.ttf",
    ProximaNovaSemibold: "./src/ProximaNovaFont/Proxima_Nova_Semibold.ttf",
  },
  output: {
    path: path.resolve("lib"),
    filename: "[name].js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "",
            },
          },
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "ProximaNovaFont",
            },
          },
        ],
      },
      {
        test: /\.txt$/i,
        use: "raw-loader",
      },
    ],
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
    },
    extensions: [".js", ".jsx"],
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM",
    },
  },
};
