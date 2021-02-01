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
    ...state,
    name: text,
  };

  return newState;
};

const changeSecondName = (state, text) => {
  const newState = {
    ...state,
    secondName: text,
  };

  return newState;
};

const changeMiddleName = (state, text) => {
  const newState = {
    ...state,
    middleName: text,
  };

  return newState;
};

const changeAge = (state, text) => {
  const newState = {
    ...state,
    age: text,
  };

  return newState;
};

const changeGender = (state, text) => {
  const newState = {
    ...state,
    gender: text,
  };

  return newState;
};

const changeUniversity = (state, text) => {
  const newState = {
    ...state,
    university: text,
  };

  return newState;
};

const resetAll = () => {
  return initialState;
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

    case "RESET_ALL":
      return resetAll(state);

    default:
      return state;
  }
};

export default reducer;
