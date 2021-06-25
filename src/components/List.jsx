import { useSelector } from "react-redux";
import Word from "../pages/Word";

export default function List({ mode, words }) {
  console.log(useSelector((state) => state.word.words));

  return (
    <ol
      className={`list-group list-group-numbered ${
        mode === "light" ? "light" : "dark"
      }`}
    >
      {words.map((v) => {
        return <Word key={v.id} />;
      })}
    </ol>
  );
}
