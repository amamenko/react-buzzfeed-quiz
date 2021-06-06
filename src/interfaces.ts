import { Dispatch, SetStateAction, ReactNode } from "react";

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

// SHARE LINK BUTTON INTERFACES
export interface FacebookButtonProps {
  facebookShareLink: string;
  isMobile?: boolean;
}

export interface TwitterButtonProps {
  twitterShareLink: string;
  twitterShareText: string;
  twitterShareHashtags: string[];
  isMobile?: boolean;
}

export interface CopyLinkButtonProps {
  shareLinkClicked: boolean;
  changeShareLinkClicked: Dispatch<SetStateAction<boolean>>;
  shareLinkAnimatingOut: boolean;
  copyShareLink: string;
  isMobile?: boolean;
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
export interface AnswersProps {
  item: QuestionType;
  selectedAnswers: ISelectedAnswer[];
  changeSelectedAnswers: Dispatch<SetStateAction<ISelectedAnswer[]>>;
  answerHovered: number | null;
  changeAnswerHovered: Dispatch<SetStateAction<number | null>>;
  questionIndex: number;
  resultsAvailable: boolean;
  onAnswerSelection(): void;
  scrollFunction(element: string, questionIndex: number): void;
  generalBackgroundColor?: string;
  generalFontColor?: string;
}

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

export interface ListItemContainerElementProps {
  className: string;
  name: string;
  children: ReactNode;
}

export type BylineProps = {
  byline: boolean;
  bylineAuthor?: string;
  bylineAuthorLink?: string;
  bylineAuthorLinkOpenInNewTab?: boolean;
  bylineAuthorTagline?: string;
  bylineAvatarImageSrc?: string;
};

export type ReactBuzzFeedQuizProps = BylineProps & {
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
