import { Dispatch, SetStateAction } from "react";
import QuestionType from "./question.interface";
import ISelectedAnswer from "../Answers/selected_answer.interface";

interface QuestionProps {
  item: QuestionType;
  questionIndex: number;
  generalBackgroundColor?: string;
  generalFontColor?: string;
  resultsAvailable: boolean;
  selectedAnswers: ISelectedAnswer[];
  changeSelectedAnswers: Dispatch<SetStateAction<ISelectedAnswer[]>>;
  scrollFunction(element: string, questionIndex: number): void;
  onAnswerSelection?(): void;
}

export default QuestionProps;
