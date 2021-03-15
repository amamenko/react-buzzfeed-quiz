import React from "react";
import StockCatPhoto from "./StockCatPhoto.jpg";
import ReactBuzzFeedQuiz from "react-buzzfeed-quiz";
import "react-buzzfeed-quiz/ProximaNovaFont.css";

const App = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <h1 style={{ paddingRight: "0.5rem" }}>React</h1>{" "}
        <h1 style={{ color: "rgb(238,50,34)", paddingRight: "0.5rem" }}>
          BuzzFeed
        </h1>{" "}
        <h1>Quiz</h1>{" "}
      </div>
      <ReactBuzzFeedQuiz
        title={
          "This Quiz Will Reveal Exactly How Well You’re Treating Your Skin"
        }
        description={"How are you really treating your skin? Be honest..."}
        byline={true}
        bylineAuthor={"Randy Tsunami"}
        bylineAuthorLink={"https://google.com"}
        bylineAuthorLinkOpenInNewTab={true}
        bylineAuthorTagline={"Man with Skin"}
        bylineAvatarImageSrc={StockCatPhoto}
        generalTheme={""}
        autoScroll={true}
        // onAnswerSelection={() => alert("You've selected an answer!")}
        // onRestart={() => alert("Restarting now!")}
        // onResult={() => alert("RESULT")}
        facebookShareButton={true}
        facebookShareLink={"google.com"}
        twitterShareButton={true}
        twitterShareLink={"google.com"}
        copyShareButton={true}
        copyShareLink={"WOOW I CANT BEIEVE IT"}
        questions={[
          {
            question: "How often do you wash your face?",
            questionRelativeToImage: "overlap",
            backgroundColor: "rgba(53, 53, 53, 0.2)",
            imageAttribution: "Getty Images",
            answerArrangement: "tile",
            backgroundImageSrc: StockCatPhoto,
            answers: [
              {
                answer: "Once a day",
                resultID: 0,
                backgroundImageSrc: StockCatPhoto,
                imageAttribution: "Via Getty",
              },
              {
                answer: "Twice a day",
                resultID: 1,
              },
              {
                answer: "When I take a shower",
                resultID: 2,
              },
              {
                answer: "I never do",
                resultID: 2,
              },
              {
                answer: "Hip-hop",
                resultID: 2,
              },
              {
                answer: "Electronic",
                resultID: 2,
              },
              {
                answer: "Country",
                resultID: 2,
              },
            ],
          },
          {
            question: "Do you ever go to sleep with makeup on?",
            answers: [
              {
                answer: "LOL, what skincare routine?",
                resultID: 0,
              },
              {
                answer: "At least 10",
                resultID: 1,
              },
              {
                answer: "I did it once, and I'll never do it again",
                resultID: 0,
              },
              {
                answer: "NEVER",
                resultID: 2,
              },
            ],
          },
          {
            question: "What do you do when you get a zit?",
            answers: [
              {
                answer: "Pop it. I can't help myself!",
                resultID: 0,
              },
              {
                answer: "Leave it alone",
                resultID: 1,
              },
              {
                answer: "Use a reliable zit cream",
                resultID: 0,
              },
              {
                answer: "Try literally anything to make it go away",
                resultID: 2,
              },
            ],
          },
          {
            question: "How do you protect your skin from the sun?",
            answers: [
              {
                answer: "Sunblock whenever I go out",
                resultID: 0,
              },
              {
                answer: "Sunblock, but only if I'm outside all day",
                resultID: 1,
              },
              {
                answer: "Nothing",
                resultID: 0,
              },
              {
                answer: "Sunblock, a hat, and sunglasses",
                resultID: 2,
              },
            ],
          },
          {
            question: "Which word best describes your sleep schedule?",
            answers: [
              {
                answer: "Nonexistent",
                resultID: 0,
              },
              {
                answer: "Chaotic",
                resultID: 1,
              },
              {
                answer: "Stable",
                resultID: 0,
              },
              {
                answer: "Perfect",
                resultID: 2,
              },
            ],
          },
          {
            question: "How often do you clean your makeup brushes?",
            answers: [
              {
                answer: "I don't wear makeup",
                resultID: 0,
              },
              {
                answer: "I've never washed my makeup brushes",
                resultID: 1,
              },
              {
                answer: "Every three months or so",
                resultID: 0,
              },
              {
                answer: "Once a year or less",
                resultID: 2,
              },
              {
                answer: "Once a year or less",
                resultID: 2,
              },
              {
                answer: "Once a year or less",
                resultID: 2,
              },
              {
                answer: "Once a year or less",
                resultID: 2,
              },
              {
                answer: "Once a year or less",
                resultID: 2,
              },
              {
                answer: "Once a year or less",
                resultID: 2,
              },
            ],
          },
        ]}
        results={[
          {
            title: "What are you doing to your skin?!",
            description:
              "Seriously, what is going on here?! Your skin is your largest organ, and it needs some TLC. You can start with baby steps: Just make sure you wash your face before going to sleep, and drink more water.",
            resultImageSrc: StockCatPhoto,
            imageAttribution: "Image: Getty Images",
            resultID: 0,
          },
          {
            title: "Aquarius",
            description: "All things in moderation, am I right?",
            resultImageSrc: StockCatPhoto,
            resultID: 1,
          },
          {
            title: "Leo",
            description: "All things in moderation, am I right?",
            resultImageSrc: StockCatPhoto,
            resultID: 2,
          },
        ]}
      />
    </>
  );
};

export default App;
