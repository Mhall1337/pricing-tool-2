import { useState } from "react"
//import './src/signup.css'

function SignUp() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
       // console.log('clicked')
          fetch('http://localhost:3000/signup',{
              method: 'POST',
              headers:{
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({username: userName, password: password, confirmPassword: confirmPassword})
          })
          .then(r => r.json())
          .then(r => console.log(r))
          .catch(error => console.log(error))
          e.target.reset()
    }

    return (
        <div>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form onSubmit={handleSubmit} className="signupForm">
                <h3>SIGN UP</h3>
                <label>Username:  </label>
                <input type="text" placeholder="Username" value={userName} onChange={e => setUserName(e.target.value)}></input>
                <br></br>
                <label>Password:  </label>
                <input type="text" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></input>
                <br></br>
                <label>Confirm Password:  </label>
                <input type="text" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}></input>
                <br></br>
                <input type="submit" value="Sign Up" className="submit"></input>
            </form>
        </div>
    )
}
export default SignUp