import QuestionType from "./question.interface";

interface QuestionProps {
  item: QuestionType;
  questionIndex: number;
  generalBackgroundColor?: string;
  generalFontColor?: string;
  resultsAvailable: boolean;
  onAnswerSelection?: (
    questionIndex?: number,
    answerIndex?: number,
    resultID?: number
  ) => void;
}

export default QuestionProps;
