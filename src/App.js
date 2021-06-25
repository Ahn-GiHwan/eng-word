import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./pages/Nav";
import List from "./pages/List";

function App() {
  const styles = {
    width: "500px",
    margin: "0 auto",
  };
  return (
    <div className="App" style={styles}>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/test" exact component={List} />
          <Route path="/" exact component={List} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
