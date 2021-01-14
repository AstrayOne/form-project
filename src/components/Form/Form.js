import React from "react";
import styles from "./Form.module.css";
import InputName from "../InputName/InputName";
import InputSecondName from "../InputSecondName/InputSecondName";
import InputMiddleName from "../InputMiddleName/InputMiddleName";
import InputAge from "../InputAge/InputAge";
import InputGender from "../SelectGender/SelectGender";
import SelectUniversity from "../SelectUniversity/SelectUniversity";

function Form() {
  return (
    <div className={styles.form}>
      <form className={styles.window}>
        <InputName />
        <InputMiddleName />
        <InputSecondName />
        <InputAge />
        <InputGender />
        <SelectUniversity />
      </form>
    </div>
  );
}

export default Form;
