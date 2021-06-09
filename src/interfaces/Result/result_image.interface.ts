import Falsy from "../ReactBuzzFeedQuiz/falsy.interface";

type ResultImageType =
    | {
        resultImageSrc?: Falsy;
        imageAttribution?: never;
    }
    | {
        resultImageSrc?: string;
        imageAttribution?: string;
    };

export default ResultImageType;