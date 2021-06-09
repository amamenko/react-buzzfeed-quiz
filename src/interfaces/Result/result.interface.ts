import ResultImageType from "./result_image.interface";

type ResultType = ResultImageType & {
  title: string;
  description: string;
  onResult?(): void;
  resultID: number;
};

export default ResultType;