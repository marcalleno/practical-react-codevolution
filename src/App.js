import "./App.css";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Icons from "./Components/Icons";
import Toast from "./Components/Toast";
import Modal from "./Components/ModalPage";
import Tooltip from "./Components/Tooltip";
import Countup from "./Components/Countup";
import IdleTimer from "./Components/IdleTimerPage";
import ColorPicker from "./Components/ColorPicker";
import CreditCard from "./Components/CreditCard";

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
        <li>
          <Link to="/modal">Modal</Link>
        </li>
        <li>
          <Link to="/tooltip">Tooltip</Link>
        </li>
        <li>
          <Link to="/countup">Countup</Link>
        </li>
        <li>
          <Link to="/idletimer">Idle Timer</Link>
        </li>
        <li>
          <Link to="/colorpicker">Color Picker</Link>
        </li>
        <li>
          <Link to="/creditcard">Credit Card</Link>
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
          <Route path="/modal">
            <Modal />
          </Route>
          <Route path="/tooltip">
            <Tooltip />
          </Route>
          <Route path="/countup">
            <Countup />
          </Route>
          <Route path="/idletimer">
            <IdleTimer />
          </Route>
          <Route path="/colorpicker">
            <ColorPicker />
          </Route>
          <Route path="/creditcard">
            <CreditCard />
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
