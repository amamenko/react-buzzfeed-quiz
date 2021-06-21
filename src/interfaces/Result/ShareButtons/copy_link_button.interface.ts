import { Dispatch, SetStateAction } from "react";

interface CopyLinkButtonProps {
  shareLinkClicked: boolean;
  changeShareLinkClicked: Dispatch<SetStateAction<boolean>>;
  shareLinkAnimatingOut: boolean;
  copyShareLink?: string;
  isMobile?: boolean;
}

export default CopyLinkButtonProps;
