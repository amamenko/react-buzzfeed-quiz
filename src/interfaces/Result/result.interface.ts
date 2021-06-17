import ResultImageType from "./result_image.interface";

type ResultType = ResultImageType & {
  /**
   * 	The heading text value of the associated result. Preceded by the string "You got: ".
   */
  title: string;
  /**
   * The text value of the sub-heading result description.
   */
  description: string;
  /**
   * Function called when the quiz is completed and the outcome is this specific result.
   * This function value supersedes ReactBuzzFeedQuiz's onResult prop, if supplied, for this specific result outcome.
   *
   * @returns void
   */
  onResult?: () => void;
  /**
   * The numerical ID of the result object. Used to associate result objects to answer objects.
   */
  resultID: number;
};

export default ResultType;
