import QuestionType from "./question.interface";

interface QuestionProps {
  item: QuestionType;
  questionIndex: number;
  generalBackgroundColor?: string;
  generalFontColor?: string;
  resultsAvailable: boolean;
  onAnswerSelection?: () => void;
}

export default QuestionProps;
