import "./App.css";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Icons from "./Components/Icons";
import Toast from "./Components/Toast";

function Home() {
  return (
    <div>
      <h2>Practical React Projects</h2>
      <ol>
        <li>
          <Link to="/icons">Icons</Link>
        </li>
        <li>
          <Link to="/toast">Toast</Link>
        </li>
      </ol>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/icons">
            <Icons />
          </Route>
          <Route path="/toast">
            <Toast />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
