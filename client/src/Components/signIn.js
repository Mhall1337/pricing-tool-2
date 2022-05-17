import { useState } from "react"
import { useHistory } from "react-router-dom";



export default function SignIn({ setUser, user }) {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  function handleLogin(e) {
    e.preventDefault();
    fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userName,
        password: password,
      }),
    }).then(r => {
      if (r.ok) {
        return r.json().then(user => {
          setUserName("")
          setPassword("")
          setUser([user])
          history.push("/")
        })
      }
      else {
        alert("Unauthorized username/password")
      }
    })
  }

  if(!user){
  return (
    <div>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleLogin} className="signupForm">
        <h3>SIGN IN</h3>
        <label className="signupLable">Username:  </label>
        <input type="text" placeholder="Username" value={userName} onChange={e => setUserName(e.target.value)} className="signupInput"></input>
        <br></br>
        <label className="signupLable">Password:  </label>
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="signupInput"></input>
        <br></br>
        <input type="submit" value="Sign In" className="submit"></input>
      </form>
    </div>
  )
  }
}

