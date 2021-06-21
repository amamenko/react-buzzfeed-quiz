import BylineProps from "../Byline/byline_props.interface";
import QuestionType from "../Question/question.interface";
import ResultType from "../Result/result.interface";

type BuzzFeedQuizProps = BylineProps & {
  /**
   * The main title header for the quiz.
   */
  title: string;
  /**
   * The sub-heading main description for the quiz.
   */
  description: string;
  /**
   * Applies a given color to every question container and every answer container's background. If no color or invalid color is supplied, the default background color is black.
   */
  generalBackgroundColor?: string;
  /**
   * Applies a given color to every question container and every answer container's font. If no color or invalid color is supplied, the default font color is white.
   */
  generalFontColor?: string;
  /**
   * Whether or not to automatically smooth-scroll the quiz to the next available question upon answer selection, to the result when the quiz is finished, and to the top of the quiz when the quiz is restarted.
   */
  autoScroll: boolean;
  /**
   * Whether or not to include the Facebook share button in the result container.
   */
  facebookShareButton: boolean;
  /**
   * URL to share to Facebook upon clicking the Facebook share button.
   */
  facebookShareLink?: string;
  /**
   * Whether or not to include the Twitter share button in the result container.
   */
  twitterShareButton: boolean;
  /**
   * URL to share to Twitter upon clicking the Twitter share button.
   */
  twitterShareLink?: string;
  /**
   * Text to pre-fill shared tweet (keep in mind Twitter's current 280 character limit).
   */
  twitterShareText?: string;
  /**
   * Array of strings that should be marked as hashtags of the shared tweet.
   */
  twitterShareHashtags?: string[];
  /**
   * Whether or not to include the "Copy Link" button in the result container.
   */
  copyShareButton: boolean;
  /**
   * The text that should be copied to the clipboard upon clicking the "Copy Link" button.
   */
  copyShareLink?: string;
  /**
   * Function called when the quiz is completed and a result is available.
   *
   * @returns void
   */
  onResult?: () => void;
  /**
   * Function called when any answer option is selected.
   *
   * @returns void
   */
  onAnswerSelection?: () => void;
  /**
   * Function called when the "Retake Quiz" button is clicked in the result container.
   *
   * @returns void
   */
  onRestart?: () => void;

  /**
   * An array of question objects.
   */
  questions: QuestionType[];
  /**
   * An array of result objects.
   */
  results: ResultType[];
};

export default BuzzFeedQuizProps;
