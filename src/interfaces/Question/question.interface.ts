import ImageType from "../BuzzFeedQuiz/image.interface";
import AnswerType from "../Answers/answer.interface";

type QuestionType = ImageType & {
  question: string;
  questionRelativeToImage?: "adjacent" | "overlap" | null;
  answerArrangement?: "row" | "tile" | null;
  backgroundColor?: string;
  fontColor?: string;
  answers: AnswerType[];
};

export default QuestionType;
