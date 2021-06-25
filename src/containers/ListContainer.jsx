import db from "../firebase";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "../components/List";
import { getWordAll } from "../redux/modules/word";
import { useEffect } from "react";

export default function ListContainer() {
  const mode = useSelector((state) => state.mode.mode);

  const dispatch = useDispatch();

  const get = useCallback(() => {
    db.collection("eng-word")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          dispatch(
            getWordAll({
              id: doc.id,
              key: doc.data().key,
              value: doc.data().value,
            })
          );
        });
      });
  }, [dispatch]);

  useEffect(() => {
    get();
  }, [get]);

  const words = useSelector((state) => state.word.words);

  return <List mode={mode} words={words} />;
}
