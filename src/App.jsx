// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Foot from './components/Foot';
import GameScreen from "./components/GameScreen"
import SideBar from "./components/SideBar"

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="screen">
        <GameScreen/>
        <SideBar/>
      </div>
      <Foot/>
    </div>
  );
}