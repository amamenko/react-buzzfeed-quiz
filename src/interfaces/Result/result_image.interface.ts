import Falsy from "../BuzzFeedQuiz/falsy.interface";

type ResultImageType =
  | {
      resultImageSrc?: Falsy;
      imageAttribution?: never;
    }
  | {
      /**
       * URL or local filename to be included in the result container image's src attribute.
       */
      resultImageSrc?: string;
      /**
       * This will add attribution text below the result description giving credit to the result container image's original source.
       */
      imageAttribution?: string;
    };

export default ResultImageType;
