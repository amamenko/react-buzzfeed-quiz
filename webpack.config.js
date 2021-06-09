const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  optimization: {
    minimizer: [new TerserPlugin({ extractComments: false })],
  },
  mode: "production",
  entry: {
    ReactBuzzFeedQuiz: "./src/ReactBuzzFeedQuiz.tsx",
    "./components/Answers": "./src/components/Answers.tsx",
    "./components/Byline": "./src/components/Byline.tsx",
    "./components/Question": "./src/components/Question.tsx",
    "./components/Result": "./src/components/Result.tsx",
    "./components/ShareButtons/CopyLinkButton":
      "./src/components/ShareButtons/CopyLinkButton.tsx",
    "./components/ShareButtons/FacebookButton":
      "./src/components/ShareButtons/FacebookButton.tsx",
    "./components/ShareButtons/TwitterButton":
      "./src/components/ShareButtons/TwitterButton.tsx",
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
    new CopyPlugin({
      patterns: [
        {
          from: "*.json",
          globOptions: {
            ignore: ["**/package-lock.*"],
          },
        },
        { from: "*.txt" },
        { from: "*.md" },
      ],
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
