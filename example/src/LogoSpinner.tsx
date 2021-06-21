import { FC } from "react";
import RBQLogo from "./assets/svg/logo.svg";

const LogoSpinner: FC = () => {
  return (
    <div className="logo_spinner_container">
      <img
        src={RBQLogo}
        className="react_buzzfeed_quiz_logo"
        alt="ReactBuzzFeedQuiz Logo"
      />
    </div>
  );
};

export default LogoSpinner;
