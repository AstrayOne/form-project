import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import PropTypes from "prop-types";
import { changeGender } from "../../actions";
import styles from "./SelectGender.module.css";

function SelectGender() {
  const dispatch = useDispatch();
  const [gender, setGender] = useState(useSelector((state) => state.gender));

  useEffect(() => {
    dispatch(changeGender(gender));
  }, [gender]);

  const handleSelectGender = (event) => {
    setGender(event.target.value);
  };

  return (
    <div className={styles.gender}>
      <label>
        Пол
        <div className={styles.radio}>
          <label className={styles.label}>
            <input
              type="radio"
              value="Мужской"
              className={styles.input}
              checked={gender === "Мужской"}
              onChange={handleSelectGender}
            />
            Мужской
          </label>
        </div>
        <div className={styles.radio}>
          <label className={styles.label} htmlFor="secondName">
            <input
              type="radio"
              value="Женский"
              className={styles.input}
              checked={gender === "Женский"}
              onChange={handleSelectGender}
            />
            Женский
          </label>
        </div>
      </label>
      {gender === "" && (
        <p className={styles.error}>Пол не выбран, выберите пол.</p>
      )}
    </div>
  );
}

SelectGender.defaultProps = {
  gender: "",
  changeGender: () => {},
};

SelectGender.propTypes = {
  gender: PropTypes.string,
  changeGender: PropTypes.func,
};

export default SelectGender;
