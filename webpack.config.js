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
    // Byline Styled Components
    "./components/styled/Byline/StyledAvatar":
      "./src/components/styled/Byline/StyledAvatar.js",
    "./components/styled/Byline/StyledAvatarContainer":
      "./src/components/styled/Byline/StyledAvatarContainer.js",
    "./components/styled/Byline/StyledBylineAuthorDescriptor":
      "./src/components/styled/Byline/StyledBylineAuthorDescriptor.js",
    "./components/styled/Byline/StyledBylineAuthorDescriptorContainer":
      "./src/components/styled/Byline/StyledBylineAuthorDescriptorContainer.js",
    "./components/styled/Byline/StyledBylineContainer":
      "./src/components/styled/Byline/StyledBylineContainer.js",

    // Question Styled Components
    "./components/styled/Question/StyledAnswerImage":
      "./src/components/styled/Question/StyledAnswerImage.js",
    "./components/styled/Question/StyledAnswerImageAttribution":
      "./src/components/styled/Question/StyledAnswerImageAttribution.js",
    "./components/styled/Question/StyledAnswerImageBottomTextContainer":
      "./src/components/styled/Question/StyledAnswerImageBottomTextContainer.js",
    "./components/styled/Question/StyledAnswerImageText":
      "./src/components/styled/Question/StyledAnswerImageText.js",
    "./components/styled/Question/StyledIndividualAnswerContainer":
      "./src/components/styled/Question/StyledIndividualAnswerContainer.js",
    "./components/styled/Question/StyledIndividualAnswerOuterContainer":
      "./src/components/styled/Question/StyledIndividualAnswerOuterContainer.js",
    "./components/styled/Question/StyledListItemContainer":
      "./src/components/styled/Question/StyledListItemContainer.js",
    "./components/styled/Question/StyledQuestionAdjacentText":
      "./src/components/styled/Question/StyledQuestionAdjacentText.js",
    "./components/styled/Question/StyledQuestionAnswersContainer":
      "./src/components/styled/Question/StyledQuestionAnswersContainer.js",
    "./components/styled/Question/StyledQuestionContainer":
      "./src/components/styled/Question/StyledQuestionContainer.js",
    "./components/styled/Question/StyledQuestionImage":
      "./src/components/styled/Question/StyledQuestionImage.js",
    "./components/styled/Question/StyledQuestionImageAttributionText":
      "./src/components/styled/Question/StyledQuestionImageAttributionText.js",
    "./components/styled/Question/StyledQuestionImageContainer":
      "./src/components/styled/Question/StyledQuestionImageContainer.js",
    "./components/styled/Question/StyledQuestionOverlapText":
      "./src/components/styled/Question/StyledQuestionOverlapText.js",
    "./components/styled/Question/StyledTextfit":
      "./src/components/styled/Question/StyledTextfit.js",

    // Result Styled Components
    "./components/styled/Result/StyledMobileRetakeQuizContainer":
      "./src/components/styled/Result/StyledMobileRetakeQuizContainer.js",
    "./components/styled/Result/StyledMobileShareLinksList":
      "./src/components/styled/Result/StyledMobileShareLinksList.js",
    "./components/styled/Result/StyledResultAttributionText":
      "./src/components/styled/Result/StyledResultAttributionText.js",
    "./components/styled/Result/StyledResultHeader":
      "./src/components/styled/Result/StyledResultHeader.js",
    "./components/styled/Result/StyledResultInnerContainer":
      "./src/components/styled/Result/StyledResultInnerContainer.js",
    "./components/styled/Result/StyledResultInnerDescription":
      "./src/components/styled/Result/StyledResultInnerDescription.js",
    "./components/styled/Result/StyledResultInnerDescriptionContainer":
      "./src/components/styled/Result/StyledResultInnerDescriptionContainer.js",
    "./components/styled/Result/StyledResultInnerDescriptionHeader":
      "./src/components/styled/Result/StyledResultInnerDescriptionHeader.js",
    "./components/styled/Result/StyledResultInnerImage":
      "./src/components/styled/Result/StyledResultInnerImage.js",
    "./components/styled/Result/StyledResultInnerImageContainer":
      "./src/components/styled/Result/StyledResultInnerImageContainer.js",
    "./components/styled/Result/StyledResultOuterContainer":
      "./src/components/styled/Result/StyledResultOuterContainer.js",
    "./components/styled/Result/StyledRetakeQuizContainer":
      "./src/components/styled/Result/StyledRetakeQuizContainer.js",
    "./components/styled/Result/StyledShareButton":
      "./src/components/styled/Result/StyledShareButton.js",
    "./components/styled/Result/StyledShareLinkButtonOuterContainer":
      "./src/components/styled/Result/StyledShareLinkButtonOuterContainer.js",
    "./components/styled/Result/StyledShareLinksList":
      "./src/components/styled/Result/StyledShareLinksList.js",
    "./components/styled/Result/StyledTooltipContainer":
      "./src/components/styled/Result/StyledTooltipContainer.js",

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
