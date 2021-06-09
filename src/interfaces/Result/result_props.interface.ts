import { Dispatch, SetStateAction } from "react";
import ResultType from "./result.interface"; 
import ISelectedAnswer from "../Answers/selected_answer.interface";

interface ResultProps {
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

export default ResultProps;