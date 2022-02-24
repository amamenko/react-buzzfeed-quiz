import QuestionType from "../Question/question.interface";

interface AnswersProps {
  item: QuestionType;
  questionIndex: number;
  resultsAvailable: boolean;
  onAnswerSelection?: (
    questionIndex?: number,
    answerIndex?: number,
    resultID?: number
  ) => void;
  generalBackgroundColor?: string;
  generalFontColor?: string;
}

export default AnswersProps;
