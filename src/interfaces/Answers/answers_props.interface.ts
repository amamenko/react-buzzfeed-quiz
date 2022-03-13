import QuestionType from "../Question/question.interface";

interface AnswersProps {
  item: QuestionType;
  questionIndex: number;
  resultsAvailable: boolean;
  changeSelectedAnswerResponse: React.Dispatch<
    React.SetStateAction<{
      title?: string | JSX.Element;
      description?: string | JSX.Element;
      image?: string;
      imageAttribution?: string;
    }>
  >;
  onAnswerSelection?: (
    questionIndex?: number,
    answerIndex?: number,
    resultID?: number
  ) => void;
  generalBackgroundColor?: string;
  generalFontColor?: string;
}

export default AnswersProps;
