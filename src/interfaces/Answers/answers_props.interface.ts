import QuestionType from "../Question/question.interface";

interface AnswersProps {
  item: QuestionType;
  questionIndex: number;
  resultsAvailable: boolean;
  onAnswerSelection?: () => void;
  generalBackgroundColor?: string;
  generalFontColor?: string;
}

export default AnswersProps;
