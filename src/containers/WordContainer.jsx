import { useSelector } from "react-redux";
import Word from "../components/Word";

export default function WordContainer() {
  const mode = useSelector((state) => state.mode.mode);
  return <Word mode={mode} />;
}
