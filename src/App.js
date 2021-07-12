import "./App.css";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Icons from "./components/Icons";
import Toast from "./components/Toast";
import Modal from "./components/ModalPage";
import Tooltip from "./components/Tooltip";
import Countup from "./components/Countup";
import IdleTimer from "./components/IdleTimerPage";
import ColorPicker from "./components/ColorPicker";
import CreditCard from "./components/CreditCard";
import DatePicker from "./components/DatePickerPage";
import Video from "./components/Video";
import Loading from "./components/Loading";
import Chart from "./components/Chart";

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
        <li>
          <Link to="/datepicker">Date Picker</Link>
        </li>
        <li>
          <Link to="/video">Video</Link>
        </li>
        <li>
          <Link to="/loading">Loading</Link>
        </li>
        <li>
          <Link to="/chart">Chart</Link>
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
          <Route path="/datepicker">
            <DatePicker />
          </Route>
          <Route path="/video">
            <Video />
          </Route>
          <Route path="/loading">
            <Loading />
          </Route>
          <Route path="/chart">
            <Chart />
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
