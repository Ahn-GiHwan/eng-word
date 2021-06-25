import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./pages/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>{/* <Route/> */}</Switch>
    </BrowserRouter>
  );
}

export default App;
