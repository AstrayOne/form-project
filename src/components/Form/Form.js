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
    <form className={styles.form}>
      <InputName />
      <InputSecondName />
      <InputMiddleName />
      <InputAge />
      <InputGender />
      <SelectUniversity />
    </form>
  );
}

export default Form;
