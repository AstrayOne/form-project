import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { changeName, changeSecondName, changeMiddleName, changeAge } from "@actions";
import Error from "@components/Error";
import styles from "@components/Input/Input.module.css";

const Input = (props) => {
  const { label, name, value, className, ...rest } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    switch (name) {
      case "firstName":
        dispatch(changeName(value));
        break;
      case "secondName":
        dispatch(changeSecondName(value));
        break;
      case "middleName":
        dispatch(changeMiddleName(value));
        break;
      case "age":
        dispatch(changeAge(value));
        break;
      default:
        break;
    }
  }, [value]);

  const cn = classNames.bind(styles);

  const rootClassNames = cn({
    firstName: className === "firstName",
    secondName: className === "secondName",
    middleName: className === "middleName",
    age: className === "age",
  });

  const inputClassNames = cn("input", {
    ageInput: className === "age",
  });

  return (
    <div className={rootClassNames}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <Field className={inputClassNames} id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={Error} />
    </div>
  );
};

Input.defaultProps = {
  label: "",
  name: "",
  value: "",
  className: "",
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
