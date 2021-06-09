import Falsy from "./falsy.interface";

type ImageType =
    | {
        backgroundImageSrc?: Falsy;
        imageAttribution?: never;
    }
    | {
        backgroundImageSrc?: string;
        imageAttribution?: string;
    };

export default ImageType;