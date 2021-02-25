[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/amamenko/react-buzzfeed-quiz">
    <img src="images/ReactBuzzFeedQuizLogo.jpg" alt="Logo" width="500" />
  </a>
</p>
<p align="center">
  A <a href="https://www.buzzfeed.com">BuzzFeed</a>-style quiz component for React.js
  </p>
  
  
## Demo

Check out the demo page [here](https://github.com/amamenko/react-buzzfeed-quiz)!

## Installation

react-buzzfeed-quiz is available through [Yarn](https://yarnpkg.com):

```bash
yarn add react-buzzfeed-quiz
```

or through [npm](https://www.npmjs.com):

```bash
npm install react-buzzfeed-quiz
```

Once it's installed, you can import the `ReactBuzzFeedQuiz` component as follows:

```js
import ReactBuzzFeedQuiz from "react-buzzfeed-quiz";
```

### BuzzFeed Font

The module also includes some `.woff` and `.woff2` font assets for [Proxima Nova](https://www.marksimonson.com/fonts/view/proxima-nova), the official BuzzFeed font. Keep in mind, `ReactBuzzFeedQuiz` uses `styled-components` for styling so font preloading for Proxima Nova is included by default if you do intend to use it. 

If you'd like to use the font, import the CSS file defining the font-faces into your project:

```js
import "react-buzzfeed-quiz/ProximaNova.css"
```


## User Guide


### API

The `ReactBuzzFeedQuiz` component accepts the following props:

| Name         | Type    | Default | Description |
| ------------ | ------- | ------- | ----------- |
| title | string | `""` | The main title header for the quiz. |
| description | string | `""` | The sub-heading description for the quiz. |
| byline | boolean | `true` | Whether or not to render the author information sub-header. |
| bylineAuthor | string | `""` | The name of the quiz creator. |
| bylineAuthorLink | string | `""` | URL to redirect to when byline author name is clicked. |
| bylineAuthorLinkOpenInNewTab | boolean | `false` | Whether or not to open a new tab when redirecting to the byline author link URL upon author name click. |
| bylineAuthorTagline | string | `""` | Additional text to render under the author name in the byline. |
| bylineAvatarImageSrc | string | `true` | URL or local filename to be included in the byline's circular avatar image's `src` attribute. |
| generalTheme | string |  | Applies a color theme to every question container and every answer container's background and font colors. Available color themes include "red", "pink", "purple", "blue", "darkGreen", "lightGreen", and "darkGray". If no color theme or invalid color theme is supplied, the default background color is black and the default font color is white. |
| autoScroll | boolean | `true` | Whether or not to automatically smooth-scroll the quiz to the next available question upon answer selection, to the result when the quiz is finished, and to the top of the quiz when the quiz is restarted. |
| facebookShareButton | boolean | `true` | Whether or not to include the Facebook share button in the result container. |
| facebookShareLink | string | `""` | URL to share to Facebook upon clicking the Facebook share button.  |
| twitterShareButton | boolean | `true` | Whether or not to include the Twitter share button in the result container. |
| twitterShareLink | string | `""` | URL to share to Twitter upon clicking the Twitter share button. |
| twitterShareText | string | `""` | Text to pre-fill shared tweet (keep in mind Twitter's current 280 character limit). |
| twitterShareHashtags | Array[string] | `[]` | Array of strings that should be marked as hashtags of the shared tweet. |
| copyShareButton | boolean | `true` | Whether or not to include the "Copy Link" button in the result container. |
| copyShareLink | string | `""` | The text that should be copied to the clipboard upon clicking the "Copy Link" button.  |
| onResult | Function | `NOOP` | Function called when the quiz is completed and a result is available. |
| onAnswerSelection |Function | `NOOP` | Function called when any answer option is selected. | 
| onRestart | Function | `NOOP` | Function called when the "Retake Quiz" button is clicked in the result container. | 
| questions | Array[Object] | `[{}]` | An array of question objects (see Question Object below). |
| results | Array[Object] | `[{}]` | An array of result objects (see Result Object below). | 

### Question Object

`ReactBuzzFeedQuiz`'s `questions` prop accepts an array of question objects with key-value pairs formatted in the following manner:

| Key Name         | Value Type    | Value Description |
| ------------ | ------- | ----------- |
| question | string | The text value of the question being asked. |
| specificTheme | string | Applies a color theme to only the specific question container's background and font colors. Available color themes are the same as those of `generalTheme`. This value supersedes the `generalTheme` prop if supplied to `ReactBuzzFeedQuiz`. If the `generalTheme` prop is supplied and this value is empty, then the color theme in `generalTheme` will be applied. Otherwise, if no color theme or invalid color theme is supplied, the default background color is black and the default font color is white.  |
| backgroundImageSrc | string | URL or local filename to be included as the background image of the question container. Automatically sets the font color to white and adds a text stroke. Takes precedence over any theme, if supplied.  |
| answers | Array[Object] | An array of answer objects (see Answer Object below). |

#### Answer Object

The value of the `answers` key of the Question Object accepts an array of answer objects with key-value pairs formatted in the following manner:

| Key Name         | Value Type    | Value Description |
| ------------ | ------- | ----------- |
| answer | string | The text value of the answer choice. |
| specificTheme | string | Applies a color theme to only the specific answer container's background and font colors. Available color themes are the same as those of `generalTheme`. This value supersedes the `generalTheme` prop if supplied to `ReactBuzzFeedQuiz`. If the `generalTheme` prop is supplied and this value is empty, then the color theme in `generalTheme` will be applied. Otherwise, if no color theme or invalid color theme is supplied, the default background color is black and the default font color is white.  |
| backgroundImageSrc | string | URL or local filename to be included as the background image of the answer container. Automatically sets the font color to white and adds a text stroke. Takes precedence over any theme, if supplied.  |
| onAnswerSelection | Function | Function called when this specific answer option is selected. This function value supersedes `ReactBuzzFeedQuiz`'s `onAnswerSelection` prop, if supplied, for this specific answer choice.  | 
| resultID | number | The numerical ID of the answer's associated Result Object (see below) found in `ReactBuzzFeedQuiz`'s `results` prop. |

### Result Object

`ReactBuzzFeedQuiz`'s `results` prop accepts an array of result objects with key-value pairs formatted in the following manner:

| Key Name         | Value Type    | Value Description |
| ------------ | ------- | ----------- |
| title | string | The heading text value of the associated result. Preceded by the string "You got: ". |
| description | string | The text value of the sub-heading result description. |
| resultImageSrc | string | URL or local filename to be included in the result container image's `src` attribute. |
| onResult | Function | Function called when the quiz is completed and the outcome is this specific result. This function value supersedes `ReactBuzzFeedQuiz`'s `onResult` prop, if supplied, for this specific result outcome.  | 
| resultID | number | The numerical ID of the Result Object. Used to associate Result Objects to Answer Objects. |



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/amamenko/react-buzzfeed-quiz/LICENSE.txt
