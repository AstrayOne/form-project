import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeMiddleName } from "../../../actions";
import styles from "./InputMiddleName.module.css";
import { validStringRegExp } from "../../../Utils/regExps";

function InputMiddleName() {
  const dispatch = useDispatch();
  const stateMiddleName = useSelector((state) => state.middleName);

  const [middleName, setMiddleName] = useState(stateMiddleName);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    dispatch(changeMiddleName(middleName));
  }, [middleName]);

  useEffect(() => {
    setMiddleName(stateMiddleName);
  }, [stateMiddleName]);

  const handleInputMiddleName = (event) => {
    setMiddleName(event.target.value);
    validStringRegExp.test(event.target.value) ? setIsValid(true) : setIsValid(false);
  };

  return (
    <div className={styles.middleName}>
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
      {!isValid && (
        <p className={styles.error}>
          Отчество введено неверно, используйте только символы русского
          алфавита.
        </p>
      )}
    </div>
  );
}

export default InputMiddleName;
