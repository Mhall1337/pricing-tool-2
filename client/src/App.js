import './App.css';
import Shipments from './Components/shipments';
import { Route, Switch } from 'react-router-dom';
import Map from './Components/map';
import NavBar from './Components/navBar';
import SignUp from './Components/signUp';
import SignIn from './Components/signIn';
import CarrierList from './Components/carrierList';
import { useState, useEffect } from 'react';
import Logout from './Components/logout';


function App() {
  
  const [filterShipments, setFilterShipments] = useState([])
  const [shipments, setShipments] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/shipments')
      .then(r => r.json())
      .then(r => {
        setShipments(r); setFilterShipments(r)
      })
      .catch(error => console.log(error))

    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser([user])
        })
          .catch(error => console.log(error));
      }
    })
  }, [])



  if (!user) {
    return (
      <div>
        <NavBar user={user} />
        <Route path="/signin">
          <SignIn setUser={setUser} user={user} />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </div>
    )
  }
  else {
    return (
      <div>
        <NavBar user={user} />
        <Switch>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/carrier-list">
            <CarrierList />
          </Route>
          <Route path="/logout">
            <Logout setUser={setUser} />
          </Route>
          <Route exact path="/">
            <Shipments shipments={shipments} setShipments={setShipments} filterShipments={filterShipments} />
          </Route>
        </Switch>
      </div>
    );
  }
}
export default App;
