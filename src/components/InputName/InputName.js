import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../../actions";
import styles from "./InputName.module.css";
import { validStringRegExp } from "../../data/regExps";

function InputName() {
  const dispatch = useDispatch();
  const [name, setName] = useState(useSelector((state) => state.name));

  useEffect(() => {
    dispatch(changeName(name));
  }, [name]);

  const handleInputName = (event) => {
    setName(event.target.value);
  };

  return (
    <div className={styles.name}>
      <label className={styles.label} htmlFor="name">
        Имя
        <input
          className={styles.input}
          name="name"
          type="text"
          value={name}
          onChange={handleInputName}
        />
      </label>
      {!validStringRegExp.test(name) && (
        <p className={styles.error}>
          Имя введено неверно, используйте только символы русского алфавита.
        </p>
      )}
    </div>
  );
}

export default InputName;
