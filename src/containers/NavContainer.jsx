import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Nav from "../components/Nav";
import { getInit } from "../redux/modules/mode";

export default function NavContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInit());
  }, [dispatch]);

  return <Nav />;
}
