import { FC } from "react";
import { FaFacebook } from "react-icons/fa";
import FacebookButtonProps from "../../interfaces/Result/ShareButtons/facebook_button.interface";

const FacebookButton: FC<FacebookButtonProps> = ({ facebookShareLink }) => {
  return (
    <li className="rbq_share_button_outer_container">
      <a
        href={
          facebookShareLink
            ? `https://www.facebook.com/sharer.php?u=${encodeURI(
                facebookShareLink
              )}`
            : ""
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="rbq_share_button rbq_facebook_share_button">
          <FaFacebook className="rbq_facebook_share_button_icon" />
        </button>
      </a>
    </li>
  );
};

export default FacebookButton;
