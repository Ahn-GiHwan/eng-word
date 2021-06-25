import db from "../../firebase";

import { createActions, handleActions } from "redux-actions";

const prefix = "eng-word/word";

export const { getWordAll } = createActions(
  {
    GET_WORD_ALL: (datas) => ({ datas }),
  },
  { prefix }
);

const initalState = {
  words: [],
};

const word = handleActions(
  {
    GET_WORD_ALL: (state, { payload: { datas } }) => {
      state.words.push({ ...datas });
      return {
        ...state,
      };
    },
  },
  initalState,
  { prefix }
);

export default word;
