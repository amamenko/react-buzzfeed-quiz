import { FC } from "react";
import { GrTwitter } from "react-icons/gr";
import TwitterButtonProps from "../../interfaces/Result/ShareButtons/twitter_button.interface";

const TwitterButton: FC<TwitterButtonProps> = ({
  twitterShareLink,
  twitterShareText,
  twitterShareHashtags,
}) => {
  return (
    <li className="rbq_share_button_outer_container">
      <a
        href={
          twitterShareLink
            ? `https://twitter.com/intent/tweet?url=${encodeURI(
                twitterShareLink
              )}${
                twitterShareText
                  ? `&text=${encodeURIComponent(twitterShareText)}`
                  : ""
              }${
                twitterShareHashtags
                  ? twitterShareHashtags.length > 0
                    ? `&hashtags=${twitterShareHashtags
                        .map((item) => encodeURIComponent(item))
                        .join()}`
                    : ""
                  : ""
              }`
            : ""
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="rbq_share_button rbq_twitter_share_button">
          <GrTwitter className="rbq_twitter_share_button_icon" />
        </button>
      </a>
    </li>
  );
};

export default TwitterButton;
