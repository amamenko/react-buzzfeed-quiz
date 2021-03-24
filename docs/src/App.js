import React, { useState } from "react";
import ProfilePhoto from "./images/ProfilePhoto.jpg";
import StockCatPhoto from "./images/StockCatPhoto.jpg";
import AdditionalCatPhoto from "./images/AdditionalCatPhoto.jpg";
import CalmSkyPhoto from "./images/CalmSkyPhoto.jpg";
import FirstResultCatImage from "./images/FirstResultCatImage.jpg";
import SecondResultCatImage from "./images/SecondResultCatImage.jpg";
import ThirdResultCatImage from "./images/ThirdResultCatImage.jpg";
import ReactBuzzFeedQuiz from "react-buzzfeed-quiz";
import styled from "styled-components";
import { FaYarn, FaNpm, FaGithub } from "react-icons/fa";
import { Modal } from "react-responsive-modal";
import "react-buzzfeed-quiz/ProximaNovaFont.css";
import "react-responsive-modal/styles.css";

const StyledNav = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  top: 0;
  z-index: 999;
  background: #fff;
  border-bottom: 1px solid rgb(235, 235, 235);

  a {
    text-decoration: none;
    color: rgb(80, 80, 80);
  }
`;

const StyledLogoContainer = styled.div`
  display: flex;
  margin-left: 1rem;
`;

const StyledLogoLetter = styled.h1`
  color: ${(props) => (props.buzzfeed ? "rgb(238, 50, 34)" : "#000")};

  font-size: 1.5rem;
  padding-right: 0.4rem;

  @media (max-width: 375px) {
    font-size: 1rem;
    padding-right: 0.3rem;
  }

  @media (min-width: 1200px) {
    font-size: 2rem;
    padding-right: 0.5rem;
  }
`;

const StyledLinksContainer = styled.div`
  display: flex;
  font-size: 1.5rem;
  margin-right: 1rem;

  @media (max-width: 330px) {
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }

  a {
    &:first-child {
      padding-right: 1rem;
    }

    &:nth-child(2) {
      padding-right: 1rem;
    }

    &:active:first-child {
      color: #000;
    }

    &:active:nth-child(2) {
      color: #cb0000;
    }

    &:active:nth-child(3) {
      color: #117cad;
    }
  }

  @media (min-width: 1200px) {
    font-size: 2rem;

    a {
      transition: color 0.3s ease;

      &:hover:first-child {
        color: #000;
      }

      &:hover:nth-child(2) {
        color: #cb0000;
      }

      &:hover:nth-child(3) {
        color: #117cad;
      }
    }
  }
`;

const StyledInstallationInstructions = styled.div`
  padding: 16px;
  margin: 0px auto;
  background: rgb(30, 30, 30);
  max-width: 600px;
  margin-bottom: 0px;
  text-align: center;

  @media (max-width: 767px) {
    margin: 0px 16px;
    margin-bottom: 0px;
  }

  code {
    margin: 0 auto;
    font-family: Courier New, Courier, monospace;
    opacity: 0.9;
    color: #fff;
  }
`;

const StyledInstallationSeparator = styled.div`
  position: relative;
  background: #fff;
  color: #000;
  max-width: 630px;
  text-align: left;
  margin: 0px 16px;
  margin-top: ${(props) => (props.first ? "70px" : "0px")};

  @media (min-width: 768px) {
    margin: auto;
    margin-top: ${(props) => (props.first ? "100px" : "0px")};
  }
`;

const App = () => {
  const [modalOpen, changeModalOpen] = useState(false);

  const openModal = () => {
    changeModalOpen(true);
  };

  const closeModal = () => {
    changeModalOpen(false);
  };

  return (
    <>
      <Modal open={modalOpen} onClose={closeModal}>
        <h2>Simple centered modal</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
      </Modal>
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
            href="https://github.com/amamenko/react-buzzfeed-quiz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaNpm />
          </a>
          <a
            href="https://github.com/amamenko/react-buzzfeed-quiz"
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
      <StyledInstallationInstructions second>
        <code>
          <span>yarn add react-buzzfeed-quiz</span>
        </code>
      </StyledInstallationInstructions>

      <ReactBuzzFeedQuiz
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
            imageAttribution: "Photo by Maria Orlova from Pexels",
            answerArrangement: "tile",
            backgroundImageSrc: CalmSkyPhoto,
            answers: [
              {
                answer: "This answer has a cat photo",
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
};

export default App;
