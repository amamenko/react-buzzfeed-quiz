import React, { useState, useEffect } from "react";
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

const App = () => {
  const [fontsLoaded, changeFontsLoaded] = useState(false);

  useEffect(() => {
    changeFontsLoaded(false);
  }, []);

  useEffect(() => {
    document.fonts.ready.then(() => {
      changeFontsLoaded(true);
    });
  }, []);

  if (fontsLoaded) {
    return (
      <>
        <StyledNav>
          <a href="/">
            <StyledLogoContainer>
              <StyledLogoLetter>React</StyledLogoLetter>
              <StyledLogoLetter buzzfeed>BuzzFeed</StyledLogoLetter>
              <StyledLogoLetter>Quiz</StyledLogoLetter>
            </StyledLogoContainer>
          </a>
          <StyledLinksContainer>
            <a
              href="https://github.com/amamenko/react-buzzfeed-quiz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.npmjs.com/package/react-buzzfeed-quiz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaNpm />
            </a>
            <a
              href="https://yarnpkg.com/package/react-buzzfeed-quiz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYarn />
            </a>
          </StyledLinksContainer>
        </StyledNav>
        <StyledInstallationSeparator first>
          <p>Install with NPM:</p>
        </StyledInstallationSeparator>
        <StyledInstallationInstructions>
          <code>
            <span>npm i react-buzzfeed-quiz</span>
          </code>
        </StyledInstallationInstructions>
        <StyledInstallationSeparator>
          <p>Install with Yarn:</p>
        </StyledInstallationSeparator>
        <StyledInstallationInstructions>
          <code>
            <span>yarn add react-buzzfeed-quiz</span>
          </code>
        </StyledInstallationInstructions>

        <BuzzFeedQuiz
          title={"Wanna See A Demo of React BuzzFeed Quiz?"}
          description={"Here it is, this is the demo."}
          byline={true}
          bylineAuthor={"Avi Mamenko"}
          bylineAuthorLink={"https://amamenko.github.io"}
          bylineAuthorLinkOpenInNewTab={true}
          bylineAuthorTagline={"Web Developer"}
          bylineAvatarImageSrc={ProfilePhoto}
          autoScroll={true}
          onRestart={() =>
            alert("This alert was triggered by the onRestart prop!")
          }
          onResult={() => alert("The onResult prop triggered this alert!")}
          facebookShareButton={true}
          facebookShareLink={"google.com"}
          twitterShareButton={true}
          twitterShareLink={"google.com"}
          copyShareButton={true}
          copyShareLink={"This text was copied using the copyShareLink prop."}
          questions={[
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
              backgroundColor:
                "linear-gradient(204deg, rgba(154,172,255,1) 40%, rgba(167,68,222,1) 100%)",
              fontColor: "#000",
              answers: [
                {
                  answer: "A",
                  backgroundColor:
                    "linear-gradient(180deg, rgba(153,52,170,1) 0%, rgba(193,51,131,1) 100%)",
                  fontColor: "#fff",
                  resultID: 0,
                },
                {
                  answer: "grid",
                  backgroundColor:
                    "linear-gradient(204deg, rgba(118,72,193,1) 45%, rgba(192,48,132,1) 100%)",
                  fontColor: "#FFD700",
                  resultID: 0,
                },
                {
                  answer: "is",
                  backgroundColor:
                    "linear-gradient(204deg, rgba(77,104,215,1) 35%, rgba(163,49,163,1) 100%)",
                  fontColor: "#fff",
                  resultID: 0,
                },
                {
                  answer: "shown",
                  backgroundColor:
                    "linear-gradient(204deg, rgba(196,52,119,1) 35%, rgba(233,88,77,1) 100%)",
                  fontColor: "#fff",
                  resultID: 1,
                },

                {
                  answer: "when",
                  backgroundColor:
                    "linear-gradient(204deg, rgba(175,37,150,1) 35%, rgba(223,80,86,1) 100%)",
                  fontColor: "#FFD700",
                  resultID: 1,
                },
                {
                  answer: "there",
                  backgroundColor:
                    "linear-gradient(204deg, rgba(122,62,190,1) 35%, rgba(196,55,126,1) 100%)",
                  fontColor: "#fff",
                  resultID: 1,
                },
                {
                  answer: "are",
                  backgroundColor:
                    "linear-gradient(204deg, rgba(231,97,90,1) 35%, rgba(251,187,88,1) 100%)",
                  fontColor: "#fff",
                  resultID: 2,
                },
                {
                  answer: ">= 9",
                  backgroundColor:
                    "linear-gradient(204deg, rgba(201,65,112,1) 35%, rgba(240,122,80,1) 100%)",
                  fontColor: "#FFD700",
                  resultID: 2,
                },
                {
                  answer: "choices",
                  backgroundColor:
                    "linear-gradient(204deg, rgba(166,59,171,1) 35%, rgba(206,72,106,1) 100%)",
                  fontColor: "#fff",
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
                  onAnswerSelection: () =>
                    alert("This alert is caused by an answer selection!"),
                  resultID: 1,
                },
                {
                  answer: "⬅️ Cb",
                  resultID: 2,
                },
              ],
            },
            {
              question:
                "Select a final answer to trigger a result callback function",
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
          ]}
          results={[
            {
              title: "This is one result title",
              description:
                "You can customize the link URL that will be shared to Facebook and Twitter. The text copied when the 'Copy Link' button is pressed can also be customized. Click the 'Retake Quiz' button to trigger the onRestart function.",
              resultImageSrc: FirstResultCatImage,
              imageAttribution: "Photo by Pixabay from Pexels",
              resultID: 0,
            },
            {
              title: "This is another result title",
              description:
                "You can customize the link URL that will be shared to Facebook and Twitter. The text copied when the 'Copy Link' button is pressed can also be customized. Click the 'Retake Quiz' button to trigger the onRestart function.",
              resultImageSrc: SecondResultCatImage,
              imageAttribution: "Photo by Tranmautritam from Pexels",
              resultID: 1,
            },
            {
              title: "Here's yet another result title",
              description:
                "You can customize the link URL that will be shared to Facebook and Twitter. The text copied when the 'Copy Link' button is pressed can also be customized. Click the 'Retake Quiz' button to trigger the onRestart function.",
              resultImageSrc: ThirdResultCatImage,
              imageAttribution: "Photo by Pixabay from Pexels",
              resultID: 2,
            },
          ]}
        />
      </>
    );
  } else {
    return <LogoSpinner />;
  }
};

export default App;
