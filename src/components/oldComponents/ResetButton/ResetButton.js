import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetAll } from "../../../actions";
import styles from "./ResetButton.module.css";

function ResetButton() {
  const dispatch = useDispatch();
  //const currentState = useSelector((state) => state);

  const handleOnReset = () => {
    const isConfirmed = window.confirm(
      "Вы уверены, что хотите очистить введенные данные?"
    );
    if (isConfirmed) dispatch(resetAll());
  };

  return (
    <div className={styles.root}>
      <div className={styles.button} onClick={handleOnReset}>
        Очистить
      </div>
    </div>
  );
}

export default ResetButton;
