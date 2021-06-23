import { FC } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { HiLink } from "react-icons/hi";
import CopyLinkButtonProps from "../../interfaces/Result/ShareButtons/copy_link_button.interface";

const CopyLinkButton: FC<CopyLinkButtonProps> = ({
  shareLinkClicked,
  changeShareLinkClicked,
  shareLinkAnimatingOut,
  copyShareLink,
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
    <li className="rbq_share_button_outer_container">
      <button
        className="rbq_share_button rbq_link_share_button"
        onClick={() => {
          if (copyShareLink) {
            handleShareLinkClicked(copyShareLink);
          }
        }}
      >
        <HiLink className="rbq_link_share_button_icon" />
        {shareLinkClicked && (
          <div
            className={`rbq_tooltip_container ${
              shareLinkAnimatingOut ? "rbq_tooltip_animating_out" : ""
            }`}
          >
            <div className="rbq_tooltip_outer_wrapper">
              <div className="rbq_tooltip_inner_wrapper">
                <IoIosCheckmarkCircle />
                <span>Link copied!</span>
              </div>
            </div>
          </div>
        )}
      </button>
    </li>
  );
};

export default CopyLinkButton;
