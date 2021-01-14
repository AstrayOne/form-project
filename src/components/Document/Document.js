import React, { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import styles from "./Document.module.css";

function Document() {
  const name = useSelector((state) => state.name);
  const secondName = useSelector((state) => state.secondName);
  const middleName = useSelector((state) => state.middleName);
  const age = useSelector((state) => state.age);
  const gender = useSelector((state) => state.gender);
  const university = useSelector((state) => state.university);

  return (
    <div className={styles.document}>
      <div className={styles.window}>
        <div className={styles.title}>Резюме</div>
        <div className={styles.fio}>
          <span>{`ФИО : ${name} ${secondName} ${middleName}`}</span>
        </div>
        <div className={styles.age}>
          <span>{`Возраст: ${age}`}</span>
        </div>
        {/* {gender === "male" ? (
          <div className={styles.gender}>
            <span>Пол: мужской</span>
          </div>
        ) : (
          <div className={styles.gender}>
            <span>Пол: женский </span>
          </div>
        )} */}
        <div className={styles.gender}>
          <span>{`Пол: ${gender}`}</span>
        </div>
        <div className={styles.university}>
          <span>{`Образование: ${university}`}</span>
        </div>
      </div>
    </div>
  )
}

Document.defaultProps = {
  name: "",
  secondName: "",
  middleName: "",
  age: "",
  gender: "",
  university: "",
};

Document.propTypes = {
  name: PropTypes.string,
  secondName: PropTypes.string,
  middleName: PropTypes.string,
  age: PropTypes.string,
  gender: PropTypes.string,
  university: PropTypes.string,
};

export default Document;
