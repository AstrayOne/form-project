import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { changeSecondName } from "../../actions";
import styles from "./InputSecondName.module.css";
import { validStringRegExp } from "../../data/regExps";

function InputSecondName() {
  const dispatch = useDispatch();
  const [secondName, setSecondName] = useState(
    useSelector((state) => state.secondName)
  );

  useEffect(() => {
    dispatch(changeSecondName(secondName));
  }, [secondName]);

  const handleInputSecondName = (event) => {
    setSecondName(event.target.value);
  };

  return (
    <div className={styles.secondName}>
      <label className={styles.label} htmlFor="secondName">
        Фамилия
        <input
          className={styles.input}
          name="secondName"
          type="text"
          value={secondName}
          onChange={handleInputSecondName}
        />
      </label>
      {!validStringRegExp.test(secondName) && (
        <p className={styles.error}>
          Фамилия введена неверно, используйте только символы русского алфавита.
        </p>
      )}
    </div>
  );
}

InputSecondName.defaultProps = {
  secondName: "",
  changeSecondName: () => {},
};

InputSecondName.propTypes = {
  secondName: PropTypes.string,
  changeSecondName: PropTypes.func,
};

export default InputSecondName;