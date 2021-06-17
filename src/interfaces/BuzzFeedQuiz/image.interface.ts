import Falsy from "./falsy.interface";

type ImageType =
  | {
      backgroundImageSrc?: Falsy;
      imageAttribution?: never;
    }
  | {
      /**
       * URL or local filename to be included as the background image of the container.
       * Automatically sets the font color to white and adds a text stroke.
       * Takes precedence over any theme, if supplied.
       */
      backgroundImageSrc?: string;
      /**
       * If background image is supplied, this will add attribution text below the image giving credit to its original source.
       */
      imageAttribution?: string;
    };

export default ImageType;
