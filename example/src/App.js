import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import ProfilePhoto from "./assets/images/ProfilePhoto.jpg";
import StockCatPhoto from "./assets/images/StockCatPhoto.jpg";
import AdditionalCatPhoto from "./assets/images/AdditionalCatPhoto.jpg";
import CalmSkyPhoto from "./assets/images/CalmSkyPhoto.jpg";
import FirstResultCatImage from "./assets/images/FirstResultCatImage.jpg";
import SecondResultCatImage from "./assets/images/SecondResultCatImage.jpg";
import ThirdResultCatImage from "./assets/images/ThirdResultCatImage.jpg";
import LogoSpinner from "./LogoSpinner";
import StyledInstallationInstructions from "./styled/StyledInstallationInstructions";
import StyledInstallationSeparator from "./styled/StyledInstallationSeparator";
import StyledNav from "./styled/StyledNav";
import StyledLinksContainer from "./styled/StyledLinksContainer";
import StyledLogoLetter from "./styled/StyledLogoLetter";
import StyledLogoContainer from "./styled/StyledLogoContainer";
import { FaYarn, FaNpm, FaGithub } from "react-icons/fa";
import { BuzzFeedQuiz } from "react-buzzfeed-quiz";
import "react-buzzfeed-quiz/lib/styles.css";
import "./App.css";
var App = function () {
    var _a = useState(false), fontsLoaded = _a[0], changeFontsLoaded = _a[1];
    useEffect(function () {
        changeFontsLoaded(false);
    }, []);
    useEffect(function () {
        document.fonts.ready.then(function () {
            changeFontsLoaded(true);
        });
    }, []);
    if (fontsLoaded) {
        return (_jsxs(_Fragment, { children: [_jsxs(StyledNav, { children: [_jsx("a", __assign({ href: "/" }, { children: _jsxs(StyledLogoContainer, { children: [_jsx(StyledLogoLetter, { children: "React" }, void 0),
                                    _jsx(StyledLogoLetter, __assign({ buzzfeed: true }, { children: "BuzzFeed" }), void 0),
                                    _jsx(StyledLogoLetter, { children: "Quiz" }, void 0)] }, void 0) }), void 0),
                        _jsxs(StyledLinksContainer, { children: [_jsx("a", __assign({ href: "https://github.com/amamenko/react-buzzfeed-quiz", target: "_blank", rel: "noopener noreferrer" }, { children: _jsx(FaGithub, {}, void 0) }), void 0),
                                _jsx("a", __assign({ href: "https://www.npmjs.com/package/react-buzzfeed-quiz", target: "_blank", rel: "noopener noreferrer" }, { children: _jsx(FaNpm, {}, void 0) }), void 0),
                                _jsx("a", __assign({ href: "https://yarnpkg.com/package/react-buzzfeed-quiz", target: "_blank", rel: "noopener noreferrer" }, { children: _jsx(FaYarn, {}, void 0) }), void 0)] }, void 0)] }, void 0),
                _jsx(StyledInstallationSeparator, __assign({ first: true }, { children: _jsx("p", { children: "Install with NPM:" }, void 0) }), void 0),
                _jsx(StyledInstallationInstructions, { children: _jsx("code", { children: _jsx("span", { children: "npm i react-buzzfeed-quiz" }, void 0) }, void 0) }, void 0),
                _jsx(StyledInstallationSeparator, { children: _jsx("p", { children: "Install with Yarn:" }, void 0) }, void 0),
                _jsx(StyledInstallationInstructions, { children: _jsx("code", { children: _jsx("span", { children: "yarn add react-buzzfeed-quiz" }, void 0) }, void 0) }, void 0),
                _jsx(BuzzFeedQuiz, { title: "Wanna See A Demo of React BuzzFeed Quiz?", description: "Here it is, this is the demo.", byline: true, bylineAuthor: "Avi Mamenko", bylineAuthorLink: "https://amamenko.github.io", bylineAuthorLinkOpenInNewTab: true, bylineAuthorTagline: "Web Developer", bylineAvatarImageSrc: ProfilePhoto, autoScroll: true, onRestart: function () {
                        return alert("This alert was triggered by the onRestart prop!");
                    }, onResult: function () { return alert("The onResult prop triggered this alert!"); }, facebookShareButton: true, facebookShareLink: "google.com", twitterShareButton: true, twitterShareLink: "google.com", copyShareButton: true, copyShareLink: "This text was copied using the copyShareLink prop.", questions: [
                        {
                            question: "Here's a default question",
                            answers: [
                                {
                                    answer: "Backgrounds are black",
                                    resultID: 0,
                                },
                                {
                                    answer: "Fonts are white",
                                    resultID: 0,
                                },
                                {
                                    answer: "arranged",
                                    resultID: 1,
                                },
                                {
                                    answer: "as tiles",
                                    resultID: 2,
                                },
                            ],
                        },
                        {
                            question: "Let's add some background and font colors",
                            backgroundColor: "rgb(211, 211, 211)",
                            fontColor: "#000",
                            answers: [
                                {
                                    answer: "A",
                                    backgroundColor: "red",
                                    fontColor: "rgb(215, 215, 215)",
                                    resultID: 0,
                                },
                                {
                                    answer: "grid",
                                    backgroundColor: "orange",
                                    fontColor: "green",
                                    resultID: 0,
                                },
                                {
                                    answer: "is",
                                    backgroundColor: "yellow",
                                    fontColor: "#000",
                                    resultID: 0,
                                },
                                {
                                    answer: "shown",
                                    backgroundColor: "green",
                                    fontColor: "#fff",
                                    resultID: 1,
                                },
                                {
                                    answer: "when",
                                    backgroundColor: "blue",
                                    fontColor: "#fff",
                                    resultID: 1,
                                },
                                {
                                    answer: "there",
                                    backgroundColor: "indigo",
                                    fontColor: "#fff",
                                    resultID: 1,
                                },
                                {
                                    answer: "are",
                                    backgroundColor: "violet",
                                    fontColor: "#000",
                                    resultID: 2,
                                },
                                {
                                    answer: ">= 9",
                                    backgroundColor: "#9198e5",
                                    resultID: 2,
                                },
                                {
                                    answer: "choices",
                                    backgroundColor: "#e66465",
                                    resultID: 2,
                                },
                            ],
                        },
                        {
                            question: "Here is some overlapping image text",
                            questionRelativeToImage: "overlap",
                            answerArrangement: "tile",
                            backgroundImageSrc: CalmSkyPhoto,
                            imageAttribution: "Photo by Maria Orlova from Pexels",
                            answers: [
                                {
                                    answer: "Here's a cat photo",
                                    resultID: 0,
                                    backgroundImageSrc: StockCatPhoto,
                                    imageAttribution: "Photo by Pixabay from Pexels",
                                },
                                {
                                    answer: "Not this one, though",
                                    resultID: 0,
                                    backgroundColor: "rgb(238,243,247)",
                                    fontColor: "rgb(53,51,48)",
                                },
                                {
                                    answer: "These",
                                    resultID: 1,
                                    backgroundColor: "rgb(238,243,247)",
                                    fontColor: "rgb(53,51,48)",
                                },
                                {
                                    answer: "answers",
                                    resultID: 1,
                                    backgroundColor: "rgb(238,243,247)",
                                    fontColor: "rgb(53,51,48)",
                                },
                                {
                                    answer: "are",
                                    resultID: 2,
                                    backgroundColor: "rgb(238,243,247)",
                                    fontColor: "rgb(53,51,48)",
                                },
                                {
                                    answer: "all",
                                    resultID: 2,
                                    backgroundColor: "rgb(238,243,247)",
                                    fontColor: "rgb(53,51,48)",
                                },
                                {
                                    answer: "tiled",
                                    resultID: 2,
                                    backgroundColor: "rgb(238,243,247)",
                                    fontColor: "rgb(53,51,48)",
                                },
                            ],
                        },
                        {
                            question: "Here is some adjacent image text",
                            questionRelativeToImage: "adjacent",
                            imageAttribution: "Photo by Anel Rossouw from Pexels",
                            answerArrangement: "row",
                            backgroundImageSrc: AdditionalCatPhoto,
                            answers: [
                                {
                                    answer: "These",
                                    resultID: 0,
                                },
                                {
                                    answer: "answers",
                                    resultID: 0,
                                },
                                {
                                    answer: "are in a",
                                    resultID: 1,
                                },
                                {
                                    answer: "row",
                                    resultID: 1,
                                },
                                {
                                    answer: "configuration.",
                                    resultID: 2,
                                },
                            ],
                        },
                        {
                            question: "Answers can also trigger a callback function",
                            answers: [
                                {
                                    answer: "Cb ➡️",
                                    resultID: 0,
                                },
                                {
                                    answer: "Click for answer function",
                                    onAnswerSelection: function () {
                                        return alert("This alert is caused by an answer selection!");
                                    },
                                    resultID: 1,
                                },
                                {
                                    answer: "⬅️ Cb",
                                    resultID: 2,
                                },
                            ],
                        },
                        {
                            question: "Select a final answer to trigger a result callback function",
                            answers: [
                                {
                                    answer: "Thanks",
                                    resultID: 0,
                                },
                                {
                                    answer: "for",
                                    resultID: 0,
                                },
                                {
                                    answer: "checking",
                                    resultID: 1,
                                },
                                {
                                    answer: "the",
                                    resultID: 1,
                                },
                                {
                                    answer: "demo",
                                    resultID: 2,
                                },
                                {
                                    answer: "out!",
                                    resultID: 2,
                                },
                            ],
                        },
                    ], results: [
                        {
                            title: "This is one result title",
                            description: "You can customize the link URL that will be shared to Facebook and Twitter. The text copied when the 'Copy Link' button is pressed can also be customized. Click the 'Retake Quiz' button to trigger the onRestart function.",
                            resultImageSrc: FirstResultCatImage,
                            imageAttribution: "Photo by Pixabay from Pexels",
                            resultID: 0,
                        },
                        {
                            title: "This is another result title",
                            description: "You can customize the link URL that will be shared to Facebook and Twitter. The text copied when the 'Copy Link' button is pressed can also be customized. Click the 'Retake Quiz' button to trigger the onRestart function.",
                            resultImageSrc: SecondResultCatImage,
                            imageAttribution: "Photo by Tranmautritam from Pexels",
                            resultID: 1,
                        },
                        {
                            title: "Here's yet another result title",
                            description: "You can customize the link URL that will be shared to Facebook and Twitter. The text copied when the 'Copy Link' button is pressed can also be customized. Click the 'Retake Quiz' button to trigger the onRestart function.",
                            resultImageSrc: ThirdResultCatImage,
                            imageAttribution: "Photo by Pixabay from Pexels",
                            resultID: 2,
                        },
                    ] }, void 0)] }, void 0));
    }
    else {
        return _jsx(LogoSpinner, {}, void 0);
    }
};
export default App;
