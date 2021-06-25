import { createActions, handleActions } from "redux-actions";

const prefix = "eng-word/mode";

export const { getInit, changeDark, changeLight } = createActions(
  "GET_INIT",
  "CHANGE_DARK",
  "CHANGE_LIGHT",
  { prefix }
);

const initialState = {
  mode: "",
};

const mode = handleActions(
  {
    GET_INIT: (state, action) => {
      let mode = "";
      const storage = localStorage.getItem("mode");
      if (storage === "dark") mode = "dark";
      else mode = "light";
      return {
        ...state,
        mode,
      };
    },
    CHANGE_DARK: (state, acion) => "dark",
    CHANGE_LIGHT: (state, acion) => "light",
  },
  initialState,
  { prefix }
);

export default mode;
