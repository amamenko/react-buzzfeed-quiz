import { Dispatch, SetStateAction } from "react";
import QuestionType from "../Question/question.interface";
import ISelectedAnswer from "../Answers/selected_answer.interface";

interface AnswersProps {
  item: QuestionType;
  selectedAnswers: ISelectedAnswer[];
  changeSelectedAnswers: Dispatch<SetStateAction<ISelectedAnswer[]>>;
  questionIndex: number;
  resultsAvailable: boolean;
  onAnswerSelection?: () => void;
  scrollFunction(element: string, questionIndex: number): void;
  generalBackgroundColor?: string;
  generalFontColor?: string;
}

export default AnswersProps;
