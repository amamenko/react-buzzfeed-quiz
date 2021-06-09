import ImageType from "../ReactBuzzFeedQuiz/image.interface";

type AnswerType = ImageType & {
  answer: string;
  backgroundColor?: string;
  fontColor?: string;
  onAnswerSelection?(): void;
  resultID: number;
};

export default AnswerType;