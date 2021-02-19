import React from "react";
import SECRET from "prop-types/lib/ReactPropTypesSecret";

const reactBuzzfeedPropTypesChecker = (Component) => (props) => {
  const analysis = Object.keys(Component.propTypes).map((key) => {
    const validator = Component.propTypes[key];

    return validator(props, key, Component.name, "", null, SECRET);
  });
  const errors = analysis
    .filter((error) => error)
    .map((error) => {
      if (error.message) {
        if (error.message.includes("The ")) {
          const shortenedStr = error.message.split("The ")[1];

          return shortenedStr;
        } else {
          return error.message;
        }
      }
    });

  const arePropsValid = errors.length === 0;

  if (arePropsValid) {
    return <Component {...props} />;
  } else {
    throw new Error(errors[0]);
  }
};

export default reactBuzzfeedPropTypesChecker;
