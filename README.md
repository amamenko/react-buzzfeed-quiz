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

## BuzzFeed Font

The module also includes some `.woff` and `.woff2` font assets for [Proxima Nova](https://www.marksimonson.com/fonts/view/proxima-nova), the official BuzzFeed font. Keep in mind, `ReactBuzzFeedQuiz` uses `styled-components` for styling so font preloading for Proxima Nova is included by default if you do intend to use it. 

If you'd like to use the font, import the CSS file defining the font-faces into your project:

```js
import "react-buzzfeed-quiz/ProximaNova.css"
```


## Usage


## API

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
| bylineAvatarImageSrc | string | `true` | URL or local image to be included in the byline's circular avatar image's `src` attribute. |
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
| questions | Array[Object] | `[{}]` | An array of question objects (see Question Object below). |
| results | Array[Object] | `[{}]` | An array of result objects (see Result Object below). | 



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/amamenko/react-buzzfeed-quiz/LICENSE.txt
