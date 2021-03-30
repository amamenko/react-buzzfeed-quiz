const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");

module.exports = {
  optimization: {
    minimizer: [new TerserPlugin({ extractComments: false })],
  },
  plugins: [
    new RemoveEmptyScriptsPlugin({
      extensions: ["css", "woff", "woff2"],
    }),
    new MiniCssExtractPlugin({
      filename: "./ProximaNova.css",
    }),
  ],
  mode: "production",
  entry: {
    quizValidatorFunction: "./src/quizValidatorFunction.js",
    ReactBuzzFeedQuiz: "./src/ReactBuzzFeedQuiz.js",
    ProximaNovaGlobalStyle: "./src/ProximaNovaGlobalStyle.js",
    "./components/Byline": "./src/components/Byline.js",
    "./components/Question": "./src/components/Question.js",
    "./components/Result": "./src/components/Result.js",

    "./ProximaNovaFont/woff2/Proxima_Nova_Black":
      "./src/ProximaNovaFont/woff2/Proxima_Nova_Black.woff2",
    "./ProximaNovaFont/woff2/Proxima_Nova_Bold":
      "./src/ProximaNovaFont/woff2/Proxima_Nova_Bold.woff2",
    "./ProximaNovaFont/woff2/Proxima_Nova_Regular":
      "./src/ProximaNovaFont/woff2/Proxima_Nova_Regular.woff2",
    "./ProximaNovaFont/woff2/Proxima_Nova_Semibold":
      "./src/ProximaNovaFont/woff2/Proxima_Nova_Semibold.woff2",

    "./ProximaNovaFont/woff/Proxima_Nova_Black":
      "./src/ProximaNovaFont/woff/Proxima_Nova_Black.woff",
    "./ProximaNovaFont/woff/Proxima_Nova_Bold":
      "./src/ProximaNovaFont/woff/Proxima_Nova_Bold.woff",
    "./ProximaNovaFont/woff/Proxima_Nova_Regular":
      "./src/ProximaNovaFont/woff/Proxima_Nova_Regular.woff",
    "./ProximaNovaFont/woff/Proxima_Nova_Semibold":
      "./src/ProximaNovaFont/woff/Proxima_Nova_Semibold.woff",
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
        test: /\.(woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "ProximaNovaFont/woff2",
            },
          },
        ],
      },
      {
        test: /\.(woff)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "ProximaNovaFont/woff",
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
      ProximaNovaFont: path.resolve(__dirname, "src/ProximaNovaFont"),
    },
    extensions: [".js", ".jsx"],
  },
  externals: {
    // Don't bundle react, react-dom, or styled-components
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
    "styled-components": {
      commonjs: "styled-components",
      commonjs2: "styled-components",
      amd: "styled-components",
    },
  },
};
