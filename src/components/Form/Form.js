import React from "react";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import Input from "@components/Input";
import SelectGender from "@components/SelectGender";
import SelectUniversity from "@components/SelectUniversity";
import { resetAll } from "@actions";
import styles from "@components/Form/Form.module.css";
import { universityList } from "@constants/universityList";

const Form = () => {
  const dispatch = useDispatch();

  const savedValues = useSelector((state) => state);

  const initialValues = {
    firstName: savedValues.name,
    secondName: savedValues.secondName,
    middleName: savedValues.middleName,
    age: savedValues.age,
    gender: savedValues.gender,
    university: savedValues.university,
  };

  const handleReset = (resetForm) => {
    if (window.confirm("Очистить введенные данные?")) {
      dispatch(resetAll());
      resetForm();
    }
  };

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={Yup.object({
          firstName: Yup.string().required("Обязательно"),
          secondName: Yup.string().required("Обязательно"),
          middleName: Yup.string().required("Обязательно"),
          age: Yup.string()
            .max(2, "Введите двузначное число")
            .min(2, "Введите двузначное число")
            .required("Обязательно"),
          gender: Yup.string().required("Обязательно"),
          university: Yup.string().required("Обязательно"),
        })}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
      {formProps => {
        return(
        <form className={styles.form} onSubmit={formProps.handleSubmit}>
          <Input 
            label="Имя"
            name="firstName" 
            value={formProps.values.firstName}
            className="firstName"/>
          <Input 
            label="Фамилия"
            name="secondName" 
            value={formProps.values.secondName}
            className="secondName"/>
          <Input 
            label="Отчество"
            name="middleName" 
            value={formProps.values.middleName}
            className="middleName"/>
          <Input 
            label="Возраст"
            name="age" 
            value={formProps.values.age}
            className="age"/>
          <SelectGender 
            label="Пол"
            name="gender"
            value={formProps.values.gender}
           // onChange={value=>formProps.setFieldValue('gender', value)}
           />
          <SelectUniversity 
            name="university"
            value={formProps.values.university}
            options={universityList}
            onChange={value=>formProps.setFieldValue('university', value)}
            />
          <button className={styles.buttonSubmit} type="submit">Отправить</button>
          <button
            className={styles.buttonReset}
            type="reset"
            onClick={handleReset.bind(null, formProps.resetForm)}
          >
            Очистить
          </button>
        </form>
        );
        }}
      </Formik>
    </>
  );
};

export default Form;
