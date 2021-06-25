import { createActions, handleActions } from "redux-actions";

const prefix = "eng-word/mode";

export const { getInit, changeMode } = createActions(
  "GET_INIT",
  "CHANGE_MODE",
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
    CHANGE_MODE: (state, acion) => {
      const prevMode = state.mode;
      if (prevMode === "light") {
        localStorage.setItem("mode", "dark");
        return {
          ...state,
          mode: "dark",
        };
      } else {
        localStorage.setItem("mode", "light");
        return {
          ...state,
          mode: "light",
        };
      }
    },
  },
  initialState,
  { prefix }
);

export default mode;
