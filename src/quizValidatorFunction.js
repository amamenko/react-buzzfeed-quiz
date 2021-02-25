export const quizValidatorFunction = (props) => {
  const {
    title,
    description,
    byline,
    bylineAuthor,
    bylineAuthorLink,
    bylineAuthorLinkOpenInNewTab,
    bylineAuthorTagline,
    bylineAvatarImageSrc,
    generalTheme,
    autoScroll,
    onAnswerSelection,
    onRestart,
    onResult,
    questions,
    facebookShareButton,
    facebookShareLink,
    twitterShareButton,
    twitterShareLink,
    twitterShareText,
    twitterShareHashtags,
    copyShareButton,
    copyShareLink,
    results,
  } = props;

  if (!title) {
    throw new Error("React BuzzFeed Quiz's 'title' prop must not be empty.");
  }

  if (typeof title !== "string") {
    throw new Error("React BuzzFeed Quiz's 'title' prop must be a string.");
  }

  if (!description) {
    throw new Error(
      "React BuzzFeed Quiz's 'description' prop must not be empty."
    );
  }

  if (typeof description !== "string") {
    throw new Error(
      "React BuzzFeed Quiz's 'description' prop must be a string."
    );
  }

  if (typeof byline !== "boolean") {
    throw new Error("React BuzzFeed Quiz's 'byline' prop must be a boolean.");
  }

  if (byline) {
    if (bylineAuthor) {
      if (typeof bylineAuthor !== "string") {
        throw new Error(
          "React BuzzFeed Quiz's 'bylineAuthor' prop must be a string."
        );
      }
    }

    if (bylineAuthorTagline) {
      if (typeof bylineAuthorTagline !== "string") {
        throw new Error(
          "React BuzzFeed Quiz's 'bylineAuthorTagline' prop must be a string."
        );
      }
    }

    if (bylineAvatarImageSrc) {
      if (typeof bylineAvatarImageSrc !== "string") {
        throw new Error(
          "React BuzzFeed Quiz's 'bylineAvatarImageSrc' prop must be a string."
        );
      }
    }

    if (bylineAuthorLink) {
      if (typeof bylineAuthorLink !== "string") {
        throw new Error(
          "React BuzzFeed Quiz's 'bylineAuthorLink' prop must be a string."
        );
      }
    }

    if (typeof bylineAuthorLinkOpenInNewTab !== "boolean") {
      throw new Error(
        "React BuzzFeed Quiz's 'bylineAuthorLinkOpenInNewTab' prop must be a boolean."
      );
    }
  }

  if (typeof generalTheme !== "string") {
    throw new Error(
      "React BuzzFeed Quiz's 'generalTheme' prop must be a string."
    );
  }

  if (typeof autoScroll !== "boolean") {
    throw new Error(
      "React BuzzFeed Quiz's 'autoScroll' prop must be a boolean."
    );
  }

  if (typeof onAnswerSelection !== "function") {
    throw new Error(
      "React BuzzFeed Quiz's 'onAnswerSelection' prop must be a function."
    );
  }

  if (typeof onRestart !== "function") {
    throw new Error(
      "React BuzzFeed Quiz's 'onRestart' prop must be a function."
    );
  }

  if (typeof onResult !== "function") {
    throw new Error(
      "React BuzzFeed Quiz's 'onResult' prop must be a function."
    );
  }

  if (typeof facebookShareButton !== "boolean") {
    throw new Error(
      "React BuzzFeed Quiz's 'facebookShareButton' prop must be a boolean."
    );
  }

  if (facebookShareLink) {
    if (typeof facebookShareLink !== "string") {
      throw new Error(
        "React BuzzFeed Quiz's 'facebookShareLink' prop must be a string."
      );
    }
  }

  if (typeof twitterShareButton !== "boolean") {
    throw new Error(
      "React BuzzFeed Quiz's 'twitterShareButton' prop must be a boolean."
    );
  }

  if (twitterShareLink) {
    if (typeof twitterShareLink !== "string") {
      throw new Error(
        "React BuzzFeed Quiz's 'twitterShareLink' prop must be a string."
      );
    }
  }

  if (twitterShareText) {
    if (typeof twitterShareText !== "string") {
      throw new Error(
        "React BuzzFeed Quiz's 'twitterShareText' prop must be a string."
      );
    }
  }

  if (twitterShareHashtags) {
    if (!Array.isArray(twitterShareHashtags)) {
      throw new Error(
        "React BuzzFeed Quiz's 'twitterShareHashtags' prop must be an array."
      );
    } else {
      if (twitterShareHashtags.length > 0) {
        if (!twitterShareHashtags.every((item) => typeof item === "string")) {
          throw new Error(
            "React BuzzFeed Quiz's 'twitterShareHashtags' prop array must only contain strings."
          );
        }
      }
    }
  }

  if (typeof copyShareButton !== "boolean") {
    throw new Error(
      "React BuzzFeed Quiz's 'copyShareButton' prop must be a boolean."
    );
  }

  if (typeof copyShareLink !== "string") {
    throw new Error(
      "React BuzzFeed Quiz's 'copyShareLink' prop must be a string."
    );
  }

  if (!questions) {
    throw new Error(
      "React BuzzFeed Quiz requires a 'questions' prop of an array type."
    );
  } else {
    if (!Array.isArray(questions)) {
      throw new Error(
        "React BuzzFeed Quiz's 'questions' prop must be an array."
      );
    } else {
      if (questions.length > 0) {
        if (questions.every((item) => typeof item === "object")) {
          for (let i = 0; i < questions.length; i++) {
            if (!questions[i].question) {
              throw new Error(
                "Every object in React BuzzFeed Quiz's 'questions' prop array must contain a 'question' key of a string type"
              );
            } else {
              if (typeof questions[i].question !== "string") {
                throw new Error(
                  "The associated value of the 'question' key of every object in React BuzzFeed Quiz's 'questions' prop array must be a string."
                );
              } else {
                if (questions[i].backgroundImageSrc) {
                  if (typeof questions[i].backgroundImageSrc !== "string") {
                    throw new Error(
                      "The associated value of the 'backgroundImageSrc' key of every object in React BuzzFeed Quiz's 'questions' prop array must be a string."
                    );
                  }
                }

                if (
                  !questions[i].specificTheme ||
                  typeof questions[i].specificTheme === "string"
                ) {
                  if (!questions[i].answers) {
                    throw new Error(
                      "Every object in React BuzzFeed Quiz's 'questions' prop array must contain an 'answers' key of an array type."
                    );
                  } else {
                    if (!Array.isArray(questions[i].answers)) {
                      throw new Error(
                        "The value of the 'answers' key of every object in React BuzzFeed Quiz's 'questions' prop array must be an array."
                      );
                    } else {
                      if (questions[i].answers.length > 0) {
                        if (
                          questions[i].answers.every(
                            (item) => typeof item === "object"
                          )
                        ) {
                          for (
                            let j = 0;
                            j < questions[i].answers.length;
                            j++
                          ) {
                            if (!questions[i].answers[j].answer) {
                              throw new Error(
                                "Every object in the 'answers' array of every object in React BuzzFeed Quiz's 'questions' prop array must contain an 'answer' key of a string type."
                              );
                            } else {
                              if (
                                typeof questions[i].answers[j].answer !==
                                "string"
                              ) {
                                throw new Error(
                                  "The associated value of the 'answer' key of every object in the 'answers' array of every object in React BuzzFeed Quiz's 'questions' prop array must be a string."
                                );
                              } else {
                                if (
                                  !questions[i].answers[j].specificTheme ||
                                  typeof questions[i].answers[j]
                                    .specificTheme === "string"
                                ) {
                                  if (
                                    questions[i].answers[j].backgroundImageSrc
                                  ) {
                                    if (
                                      typeof questions[i].answers[j]
                                        .backgroundImageSrc !== "string"
                                    ) {
                                      ("The associated value of the 'backgroundImageSrc' key in React BuzzFeed Quiz must be a string.");
                                    }
                                  }

                                  if (
                                    !questions[i].answers[j].resultID &&
                                    questions[i].answers[j].resultID !== 0
                                  ) {
                                    throw new Error(
                                      "Every object in the 'answers' array of every object in React BuzzFeed Quiz's 'questions' prop array must contain a 'resultID' prop of a number type."
                                    );
                                  } else {
                                    if (
                                      typeof questions[i].answers[j]
                                        .resultID !== "number"
                                    ) {
                                      throw new Error(
                                        "The associated value of the 'resultID' key of every object in the 'answers' array of every object in React BuzzFeed Quiz's 'questions' prop array must be a number."
                                      );
                                    } else {
                                      if (
                                        questions[i].answers[j]
                                          .onAnswerSelection
                                      ) {
                                        if (
                                          typeof questions[i].answers[j]
                                            .onAnswerSelection !== "function"
                                        ) {
                                          throw new Error(
                                            "The associated value of the 'onAnswerSelection' key of every object in the 'answers' array of every object in React BuzzFeed Quiz's 'questions' prop array must be a function."
                                          );
                                        }
                                      }
                                    }
                                  }
                                } else {
                                  throw new Error(
                                    "The associated value of the 'specificTheme' key of every object in the 'answers' array of every object in React BuzzFeed Quiz's 'questions' prop array must be a string."
                                  );
                                }
                              }
                            }
                          }
                        } else {
                          throw new Error(
                            "The associated array value of the 'answers' key of every object in React BuzzFeed Quiz's 'questions' prop array must only contain objects."
                          );
                        }
                      } else {
                        throw new Error(
                          "The value of the 'answers' key of every object in React BuzzFeed Quiz's 'questions' prop array must contain at least one object."
                        );
                      }
                    }
                  }
                } else {
                  throw new Error(
                    "The associated value of the 'specificTheme' key of every object in React BuzzFeed Quiz's 'questions' prop array must be a string."
                  );
                }
              }
            }
          }
        } else {
          throw new Error(
            "React BuzzFeed Quiz's 'questions' prop array must only contain objects."
          );
        }
      } else {
        throw new Error(
          "React BuzzFeed Quiz's 'questions' prop array must contain at least one object."
        );
      }
    }
  }

  if (!results) {
    throw new Error(
      "React BuzzFeed Quiz requires a 'results' prop of an array type."
    );
  } else {
    if (!Array.isArray(results)) {
      throw new Error("React BuzzFeed Quiz's 'results' prop must be an array.");
    } else {
      if (results.length > 0) {
        if (results.every((item) => typeof item === "object")) {
          for (let i = 0; i < results.length; i++) {
            if (!results[i].title) {
              throw new Error(
                "Every object in React BuzzFeed Quiz's 'results' prop array must contain a 'title' key of a string type."
              );
            } else {
              if (typeof results[i].title !== "string") {
                throw new Error(
                  "The associated value of the 'title' key in every object of React BuzzFeed Quiz's 'results' prop array must be a string."
                );
              } else {
                if (!results[i].description) {
                  throw new Error(
                    "Every object in React BuzzFeed Quiz's 'results' prop array must contain a 'description' key of a string type."
                  );
                } else {
                  if (typeof results[i].description !== "string") {
                    throw new Error(
                      "The associated value of the 'description' key in every object of React BuzzFeed Quiz's 'results' prop array must be a string."
                    );
                  } else {
                    if (!results[i].resultImageSrc) {
                      throw new Error(
                        "Every object in React BuzzFeed Quiz's 'results' prop array must contain a 'resultImageSrc' key of a string type."
                      );
                    } else {
                      if (typeof results[i].resultImageSrc !== "string") {
                        throw new Error(
                          "The associated value of the 'resultImageSrc' key in every object of React BuzzFeed Quiz's 'results' prop array must be a string."
                        );
                      } else {
                        if (!results[i].resultID && results[i].resultID !== 0) {
                          throw new Error(
                            "Every object in React BuzzFeed Quiz's 'results' prop array must contain a 'resultID' key of a number type."
                          );
                        } else {
                          if (typeof results[i].resultID !== "number") {
                            throw new Error(
                              "The associated value of the 'resultID' key in every object of React BuzzFeed Quiz's 'results' prop array must be a number."
                            );
                          } else {
                            if (results[i].onResult) {
                              if (typeof results[i].onResult !== "function") {
                                throw new Error(
                                  "The associated value of the 'onResult' key in every object of React BuzzFeed Quiz's 'results' prop array must be a function."
                                );
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        } else {
          throw new Error(
            "React BuzzFeed Quiz's 'results' prop array must only contain objects."
          );
        }
      } else {
        throw new Error(
          "React BuzzFeed Quiz's 'results' prop array must contain at least one object."
        );
      }
    }
  }

  return true;
};
