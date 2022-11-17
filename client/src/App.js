import './App.css';
import { Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage.jsx';
import Home from "./Components/Home/Home.jsx";
import Activities from "./Components/Activities/activities.jsx";
import CountryId from "./Components/Countries/CountryId/CountryId.jsx";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/activities" component={Activities}></Route>
      <Route exact path="/countries/:id" component={CountryId}></Route>
    </div>
  );
}

export default App;
