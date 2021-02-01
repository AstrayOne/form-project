export const changeName = (text) => {
  return {
    type: "CHANGE_NAME",
    text,
  };
};

export const changeSecondName = (text) => {
  return {
    type: "CHANGE_SECOND_NAME",
    text,
  };
};

export const changeMiddleName = (text) => {
  return {
    type: "CHANGE_MIDDLE_NAME",
    text,
  };
};

export const changeAge = (text) => {
  return {
    type: "CHANGE_AGE",
    text,
  };
};

export const changeGender = (text) => {
  return {
    type: "CHANGE_GENDER",
    text,
  };
};

export const changeUniversity = (text) => {
  return {
    type: "CHANGE_UNIVERSITY",
    text,
  };
};

export const resetAll = () => {
  return {
    type: "RESET_ALL",
  };
};
