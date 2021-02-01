import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {  ErrorMessage } from "formik";
import PropTypes from "prop-types";
import styles from "./SelectGender.module.css";
import Error from "@components/Error";
import { changeGender } from "@actions";

const SelectGender = (props) => {
  const {label, name, value, onChange, ...rest} = props;

  const dispatch = useDispatch();

  const [gender, setGender] = useState(value);

  useEffect(() => {
    onChange(gender);
    dispatch(changeGender(gender));
  }, [gender]);

  useEffect(() => {
    setGender(value);
    console.log(gender);
  }, [value]);

  const handleOnChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div className={styles.gender}>
      <div>{label}</div>
      <div className={styles.radio}>
        <label className={styles.label}>
          <input 
            className={styles.input} 
            type="radio"
            checked={value === "мужской"}
            value="мужской"
            onChange={handleOnChange}
          ></input>
          Мужской
        </label>
      </div>
     <div className={styles.radio}>
      <label className={styles.label}>
          <input 
            className={styles.input} 
            type="radio" 
            checked={value === "женский"}
            value="женский"
            onChange={handleOnChange}
            ></input>
          Женский
        </label>
     </div>
      <ErrorMessage name={name} component={Error} />
    </div>
  );
};

SelectGender.defaultProps = {
  label: "",
  name: "",
  value: "",
  onChange: () => {},
};

SelectGender.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default SelectGender;
