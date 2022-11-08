import './App.css';
import { Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage.jsx';
import Home from "./Components/Home/Home.jsx";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/home" component={Home}/>
    </div>
  );
}

export default App;
