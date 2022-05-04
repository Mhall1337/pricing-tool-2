import './App.css';
import Shipments from './Components/shipments';
import { Route, Switch } from 'react-router-dom';
import Map from './Components/map';
import NavBar from './Components/navBar';
import SignUp from './Components/signUp';
import SignIn from './Components/signIn';
import CarrierList from './Components/carrierList';
import { useState, useEffect } from 'react';

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser([user])).catch(error => console.log(error));
      }
    });
  }, []);
  if (!user) {
    return (
      <div>
        <NavBar user={user}/>
        <SignIn setUser={setUser} user={user} />
      </div>
    )
  }
  else {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/carrier-list">
            <CarrierList />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/">
            <Shipments />
          </Route>
        </Switch>
      </div>
    );
  }
}
export default App;
