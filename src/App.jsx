import './App.css';
import Navbar from './components/Navbar';
import Foot from './components/Foot';
import GameScreen from "./pages/GameScreen"
import Contact from "./pages/Contact"
import About from "./pages/About"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
      <Route path="/kontakt">
        <Contact/>
      </Route>
      <Route path="/o-nas">
        <About/>
      </Route>
      <Route path="/">
        <GameScreen/>
      </Route>
    </Switch>
    <Foot/>
  </Router>
  );
}