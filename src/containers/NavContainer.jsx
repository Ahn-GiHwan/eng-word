import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../components/Nav";
import { changeMode, getInit } from "../redux/modules/mode";

export default function NavContainer() {
  const mode = useSelector((state) => state.mode.mode);
  const dispatch = useDispatch();

  const init = useCallback(() => {
    dispatch(getInit());
  }, [dispatch]);

  const onClick = useCallback(() => {
    dispatch(changeMode());
  }, [dispatch]);

  return <Nav mode={mode} init={init} onClick={onClick} />;
}
