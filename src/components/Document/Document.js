import React from "react";
import { useSelector } from "react-redux";
import styles from "@components/Document/Document.module.css";

function Document() {
  const name = useSelector((state) => state.name);
  const secondName = useSelector((state) => state.secondName);
  const middleName = useSelector((state) => state.middleName);
  const age = useSelector((state) => state.age);
  const gender = useSelector((state) => state.gender);
  const university = useSelector((state) => state.university);

  return (
    <div className={styles.document}>
      <div className={styles.title}>
        <span>Анкета студента</span>
      </div>
      <div className={styles.fio}>
        <span>{`ФИО: ${secondName} ${name} ${middleName}`}</span>
      </div>
      <div className={styles.age}>
        <span>{`Возраст (полных лет): ${age}`}</span>
      </div>
      <div className={styles.gender}>
        <span>{`Пол: ${gender}`}</span>
      </div>
      <div className={styles.university}>
        <span>{`Учебное заведение: ${university}`}</span>
      </div>
    </div>
  );
}

export default Document;
