import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeAge } from "../../actions";
import styles from "./InputAge.module.css";
import { validAgeRegExp } from "../../data/regExps";

function InputAge() {
  const dispatch = useDispatch();

  const [age, setAge] = useState(useSelector((state) => state.age));

  useEffect(() => {
    dispatch(changeAge(age));
  }, [age]);

  const handleInputAge = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={styles.age}>
      <label className={styles.label}>
        Возраст:
        <input
          className={styles.input}
          name="age"
          type="text"
          value={age}
          onChange={handleInputAge}
        />
      </label>
      {!validAgeRegExp.test(age) && (
        <p className={styles.error}>
          Возраст введен неверно, введите двузначное число.
        </p>
      )}
    </div>
  );
}

export default InputAge;
