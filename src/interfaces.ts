import { Dispatch, SetStateAction } from "react";

export type Falsy = false | 0 | "" | null | undefined;

// RESULT TYPES/INTERFACES
export type ResultImageType =
  | {
      resultImageSrc?: Falsy;
      imageAttribution?: never;
    }
  | {
      resultImageSrc?: string;
      imageAttribution?: string;
    };

export type ResultType = ResultImageType & {
  title: string;
  description: string;
  onResult?(): void;
  resultID: number;
};

export interface ResultProps {
  title: string;
  resultsAvailable: boolean;
  finalResult: ResultType[];
  facebookShareButton: boolean;
  facebookShareLink: string;
  twitterShareButton: boolean;
  twitterShareLink: string;
  twitterShareText: string;
  twitterShareHashtags: string[];
  copyShareButton: boolean;
  copyShareLink: string;
  shareLinkClicked: boolean;
  changeShareLinkClicked: Dispatch<SetStateAction<boolean>>;
  shareLinkAnimatingOut: boolean;
  changeShareLinkAnimatingOut: Dispatch<SetStateAction<boolean>>;
  scrollFunction(element: string, questionIndex: number): void;
  changeResultsAvailable: Dispatch<SetStateAction<boolean>>;
  changeSelectedAnswers: Dispatch<SetStateAction<ISelectedAnswer[]>>;
  changeFinalResult: Dispatch<SetStateAction<ResultType[]>>;
  onResult?(): void;
  onRestart?(): void;
}

export type ImageType =
  | {
      backgroundImageSrc?: Falsy;
      imageAttribution?: never;
    }
  | {
      backgroundImageSrc?: string;
      imageAttribution?: string;
    };

// ANSWER TYPES/INTERFACES
export type AnswerType = ImageType & {
  answer: string;
  backgroundColor?: string;
  fontColor?: string;
  onAnswerSelection?(): void;
  resultID: number;
};

export interface ISelectedAnswer {
  questionIndex: number;
  answerIndex: number;
  resultID: number;
}

// QUESTION TYPES/INTERFACES
export type QuestionType = ImageType & {
  question: string;
  questionRelativeToImage?: "adjacent" | "overlap" | null;
  answerArrangement?: "row" | "tile" | null;
  backgroundColor?: string;
  fontColor?: string;
  answers: AnswerType[];
};

export interface QuestionProps {
  item: QuestionType;
  questionIndex: number;
  generalBackgroundColor?: string;
  generalFontColor?: string;
  resultsAvailable: boolean;
  selectedAnswers: ISelectedAnswer[];
  changeSelectedAnswers: Dispatch<SetStateAction<ISelectedAnswer[]>>;
  scrollFunction(element: string, questionIndex: number): void;
  onAnswerSelection(): void;
}

export type BylineType =
  | {
      byline: true;
      bylineAuthor?: string;
      bylineAuthorLink?: string;
      bylineAuthorLinkOpenInNewTab?: boolean;
      bylineAuthorTagline?: string;
      bylineAvatarImageSrc?: string;
    }
  | {
      byline: false;
      bylineAuthor: never;
      bylineAuthorLink: never;
      bylineAuthorLinkOpenInNewTab: never;
      bylineAuthorTagline: never;
      bylineAvatarImageSrc: never;
    };

export type ReactBuzzFeedQuizProps = BylineType & {
  title: string;
  description: string;
  generalBackgroundColor?: string;
  generalFontColor?: string;
  autoScroll: boolean;
  facebookShareButton: boolean;
  facebookShareLink: string;
  twitterShareButton: boolean;
  twitterShareLink: string;
  twitterShareText: string;
  twitterShareHashtags: string[];
  copyShareButton: boolean;
  copyShareLink: string;
  onResult(): void;
  onAnswerSelection(): void;
  onRestart(): void;
  questions: QuestionType[];
  results: ResultType[];
};
