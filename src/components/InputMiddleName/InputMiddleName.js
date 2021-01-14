import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { changeMiddleName } from "../../actions";
import styles from "./InputMiddleName.module.css";
import { validStringRegExp } from "../../data/regExps";

function InputMiddleName() {
  const dispatch = useDispatch();
  const [middleName, setMiddleName] = useState(useSelector((state) => state.middleName));

  useEffect(() => {
    dispatch(changeMiddleName(middleName));
  }, [middleName]);

  const handleInputMiddleName = (event) => {
    setMiddleName(event.target.value);
  };

  return (
    <div className={styles.MiddleName}>
      <label className={styles.label}>
        Отчество
        <input
          className={styles.input}
          name="middleName"
          type="text"
          value={middleName}
          onChange={handleInputMiddleName}
        />
      </label>
      {!validStringRegExp.test(middleName) && (
        <p className={styles.error}>
          Отчество введено неверно, используйте только символы русского
          алфавита.
        </p>
      )}
    </div>
  );
}

InputMiddleName.defaultProps = {
  middleName: "",
  changeMiddleName: () => {},
};

InputMiddleName.propTypes = {
  middleName: PropTypes.string,
  changeMiddleName: PropTypes.func,
};

export default InputMiddleName;
