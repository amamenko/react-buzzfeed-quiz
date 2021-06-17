import ImageType from "../BuzzFeedQuiz/image.interface";
import AnswerType from "../Answers/answer.interface";

type QuestionType = ImageType & {
  /**
   * The text value of the question being asked.
   */
  question: string;
  /**
   * Determines whether the question text's position overlaps a supplied image or whether the question text is displayed directly above the image (adjacently).
   * Provide a value of "adjacent" to this key for the latter option, otherwise the text will overlap by default.
   */
  questionRelativeToImage?: "adjacent" | "overlap" | null;
  /**
   * Determines the spacial orientation of the answer choices.
   * Assign this key a value of "row" for each answer text to be on a separate line (Note: only answer text will show - no background images or image attributions) or a value of "tile" for Buzzfeed's default tile configuration.
   */
  answerArrangement?: "row" | "tile" | null;
  /**
   * Applies a given color to only the specific question container's background.
   * This value supersedes the generalBackgroundColor prop if supplied to ReactBuzzFeedQuiz.
   * If the generalBackgroundColor prop is supplied and this value is empty, then the color in generalBackgroundColor will be applied.
   * Otherwise, if no color or invalid color is supplied, the default background color is black.
   */
  backgroundColor?: string;
  /**
   * Applies a given color to only the specific question container's font.
   * This value supersedes the generalFontColor prop if supplied to ReactBuzzFeedQuiz.
   * If the generalFontColor prop is supplied and this value is empty, then the color in generalFontColor will be applied.
   * Otherwise, if no color or invalid color is supplied, the default font color is white.
   */
  fontColor?: string;
  /**
   * An array of answer objects.
   */
  answers: AnswerType[];
};

export default QuestionType;
