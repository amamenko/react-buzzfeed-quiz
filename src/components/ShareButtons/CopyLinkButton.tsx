import React, { FC } from "react";
import { IoIosCheckmarkCircle, IoIosLink } from "react-icons/io";
import CopyLinkButtonProps from "../../interfaces/Result/ShareButtons/copy_link_button.interface";

const CopyLinkButton: FC<CopyLinkButtonProps> = ({
  shareLinkClicked,
  changeShareLinkClicked,
  shareLinkAnimatingOut,
  copyShareLink,
  isMobile,
}) => {
  const handleShareLinkClicked = (shareLink: string) => {
    // Handle copy to clipboard
    const el = document.createElement("textarea");
    el.value = shareLink;
    el.setAttribute("readonly", "");
    el.setAttribute("style", "position: absolute; left: -9999px;");
    document.body.appendChild(el);

    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      // save current contentEditable/readOnly status
      let editable = el.contentEditable;
      let readOnly = el.readOnly;

      // convert to editable with readonly to stop iOS keyboard opening
      el.contentEditable = "true";
      el.readOnly = true;

      // create a selectable range
      let range = document.createRange();
      range.selectNodeContents(el);

      // select the range
      let selection = window.getSelection();

      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
        el.setSelectionRange(0, 999999);

        // restore contentEditable/readOnly to original state
        el.contentEditable = editable;
        el.readOnly = readOnly;
      }
    } else {
      el.select();
    }

    document.execCommand("copy");
    document.body.removeChild(el);

    if (!shareLinkClicked) {
      changeShareLinkClicked(true);
    }
  };

  return (
    <div
      className={`${
        isMobile
          ? "rbq_mobile_share_link_button_outer_container"
          : "rbq_share_link_button_outer_container"
      }`}
    >
      {shareLinkClicked && (
        <div
          className={`rbq_tooltip_container rbq_link_share_copied_tooltip ${
            shareLinkAnimatingOut ? "rbq_tooltip_animating_out" : ""
          }`}
        >
          <IoIosCheckmarkCircle />
          <p>Link copied!</p>
        </div>
      )}
      <span
        className={`rbq_share_button rbq_link_share_button ${
          isMobile ? "rbq_mobile_link_share_button" : ""
        }`}
        onClick={() => handleShareLinkClicked(copyShareLink)}
      >
        <IoIosLink
          className={`${
            isMobile
              ? "rbq_mobile_link_share_button_icon"
              : "rbq_link_share_button_icon"
          }`}
        />
        <p
          className={`${
            isMobile
              ? "rbq_mobile_link_share_button_text"
              : "rbq_link_share_button_text"
          }`}
        >
          Copy Link
        </p>
      </span>
    </div>
  );
};

export default CopyLinkButton;
