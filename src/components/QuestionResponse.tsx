import React, { FC } from "react";
import { Element } from "react-scroll";
import QuestionResponseProps from "../interfaces/QuestionResponse/question_response.interface";

const QuestionResponse: FC<QuestionResponseProps> = ({
  questionIndex,
  title,
  description,
  image,
  imageAttribution,
}) => {
  const visible = title || description || image || imageAttribution;

  return (
    <Element
      name={`RBQQuestionResponse${questionIndex}`}
      className={`rbq_question_response_outer_container ${
        visible ? "" : "hide_rbq_response_container"
      }`}
    >
      <div className="rbq_question_response_inner_container">
        {title ? (
          typeof title === "string" ? (
            <h3 className="rbq_question_response_title">{title}</h3>
          ) : (
            <React.Fragment>{title}</React.Fragment>
          )
        ) : null}
        {description ? (
          typeof description === "string" ? (
            <h4 className="rbq_question_response_description">{description}</h4>
          ) : (
            <React.Fragment>{description}</React.Fragment>
          )
        ) : null}
        {image ? (
          <img
            className="rbq_question_response_image"
            src={image}
            alt={"Question response image"}
          />
        ) : null}
        {imageAttribution ? (
          <p className="rbq_question_response_image_attribution">
            {imageAttribution}
          </p>
        ) : null}
      </div>
    </Element>
  );
};

export default QuestionResponse;
