const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  optimization: {
    minimizer: [new TerserPlugin({ extractComments: false })],
  },
  mode: "production",
  entry: {
    ReactBuzzFeedQuiz: "./src/ReactBuzzFeedQuiz.tsx",
    interfaces: "./src/interfaces.ts",
    "./components/Answers/Answers": "./src/components/Answers/Answers.tsx",
    "./components/Byline/Byline": "./src/components/Byline/Byline.tsx",
    "./components/Question/Question": "./src/components/Question/Question.tsx",
    "./components/Result/Result": "./src/components/Result/Result.tsx",
    "./components/Result/ShareButtons/CopyLinkButton":
      "./src/components/Result/ShareButtons/CopyLinkButton.tsx",
    "./components/Result/ShareButtons/FacebookButton":
      "./src/components/Result/ShareButtons/FacebookButton.tsx",
    "./components/Result/ShareButtons/TwitterButton":
      "./src/components/Result/ShareButtons/TwitterButton.tsx",
  },
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "[name].js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.scss$/,
        include: /src/,
        exclude: /node_modules/,
        sideEffects: true,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: true,
    }),
  ],
  resolve: {
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
    },
    extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
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
