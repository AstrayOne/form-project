const initialState = {
  name: "",
  secondName: "",
  middleName: "",
  age: "",
  gender: "",
  university: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        name: action.text,
      };

    case "CHANGE_SECOND_NAME":
      return {
        ...state,
        secondName: action.text,
      };

    case "CHANGE_MIDDLE_NAME":
      return {
        ...state,
        middleName: action.text,
      };

    case "CHANGE_AGE":
      return {
        ...state,
        age: action.text,
      };

    case "CHANGE_GENDER":
      return {
        ...state,
        gender: action.text,
      };

    case "CHANGE_UNIVERSITY":
      return {
        ...state,
        university: action.text,
      };

    case "RESET_ALL":
      return initialState;

    default:
      return state;
  }
};

export default reducer;
