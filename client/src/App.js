import './App.css';
import Shipments from './Components/shipments';
import { Route, Switch } from 'react-router-dom';
import Map from './Components/map';

function App() {

  return (
    <div>
      <Switch>
        <Route path="/map">
          <Map  />
        </Route>
        <Route exact path="/">
          <Shipments />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
