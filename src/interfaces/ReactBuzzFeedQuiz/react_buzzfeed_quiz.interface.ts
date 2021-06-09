import BylineProps from "../Byline/byline_props.interface";
import QuestionType from "../Question/question.interface";
import ResultType from "../Result/result.interface";

type ReactBuzzFeedQuizProps = BylineProps & {
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

export default ReactBuzzFeedQuizProps;