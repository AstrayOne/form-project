const initialState = {
  name: "",
  secondName: "",
  middleName: "",
  age: "",
  gender: "",
  university: "",
};

const changeName = (state, text) => {
  const newState = {
    name: text,
    secondName: state.secondName,
    middleName: state.middleName,
    age: state.age,
    gender: state.gender,
    university: state.university,
  };

  return newState;
};

const changeSecondName = (state, text) => {
  const newState = {
    name: state.name,
    secondName: text,
    middleName: state.middleName,
    age: state.age,
    gender: state.gender,
    university: state.university,
  };

  return newState;
};

const changeMiddleName = (state, text) => {
  const newState = {
    name: state.name,
    secondName: state.secondName,
    middleName: text,
    age: state.age,
    gender: state.gender,
    university: state.university,
  };

  return newState;
};

const changeAge = (state, text) => {
  const newState = {
    name: state.name,
    secondName: state.secondName,
    middleName: state.middleName,
    age: text,
    gender: state.gender,
    university: state.university,
  };

  return newState;
};

const changeGender = (state, text) => {
  const newState = {
    name: state.name,
    secondName: state.secondName,
    middleName: state.middleName,
    age: state.age,
    gender: text,
    university: state.university,
  };

  return newState;
};

const changeUniversity = (state, text) => {
  const newState = {
    name: state.name,
    secondName: state.secondName,
    middleName: state.middleName,
    age: state.age,
    gender: state.gender,
    university: text,
  };

  return newState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return changeName(state, action.text);

    case "CHANGE_SECOND_NAME":
      return changeSecondName(state, action.text);

    case "CHANGE_MIDDLE_NAME":
      return changeMiddleName(state, action.text);

    case "CHANGE_AGE":
      return changeAge(state, action.text);

    case "CHANGE_GENDER":
      return changeGender(state, action.text);

    case "CHANGE_UNIVERSITY":
      return changeUniversity(state, action.text);

    default:
      return state;
  }
};

export default reducer;