import db from "../../firebase";

import { createActions, handleActions } from "redux-actions";

const prefix = "eng-word/word";

export const { getWordAll } = createActions("GET_WORD_ALL", { prefix });

const initalState = {
  word: "",
};

const word = handleActions(
  {
    GET_WORD_ALL: (state, action) => {
      return (state.word = "red");
    },
  },
  initalState,
  { prefix }
);

export default word;
