import { createStore } from "redux";
import reducer from "@reducers";

const fields = [
  "name",
  "secondName",
  "middleName",
  "age",
  "gender",
  "university",
];

const localFields = fields.map((field) => {
  const item = localStorage.getItem(field);
  if (item == null) {
    return "";
  }
  return item;
});

const savedState = {
  name: localFields[0],
  secondName: localFields[1],
  middleName: localFields[2],
  age: localFields[3],
  gender: localFields[4],
  university: localFields[5],
};

const store = createStore(
  reducer,
  savedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  localStorage.setItem("name", store.getState().name);
  localStorage.setItem("secondName", store.getState().secondName);
  localStorage.setItem("middleName", store.getState().middleName);
  localStorage.setItem("age", store.getState().age);
  localStorage.setItem("gender", store.getState().gender);
  localStorage.setItem("university", store.getState().university);
});

export default store;
