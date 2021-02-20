const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    ReactBuzzFeedQuiz: './src/ReactBuzzFeedQuiz.js',
    reactBuzzfeedPropTypesChecker: './src/reactBuzzfeedPropTypesChecker.js',
    ProximaNovaFont: "./src/ProximaNovaFont"
  },
  output: {
    path: path.resolve("lib"),
    filename: "[name].js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: "babel-loader",
      }
    ],
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
    },
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
