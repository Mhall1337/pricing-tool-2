import './App.css';
import Shipments from './Components/shipments';
import { Route, Switch } from 'react-router-dom';
import Map from './Components/map';
import NavBar from './Components/navBar';
import SignUp from './Components/signUp';

function App() {

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/map">
          <Map />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/">
          <Shipments />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
