import { useState } from "react"

export default function SignIn(){
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')


    function handleSubmit(e) {
        e.preventDefault()
        console.log('clicked')
        //   fetch('http://localhost:3000/signup/${userName}')
        //   .then(r => r.json())
        //   .then(r => console.log(r))
        //   .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form onSubmit={handleSubmit} className="signupForm">
                <h3>SIGN IN</h3>
                <label>Username:  </label>
                <input type="text" placeholder="Username" value={userName} onChange={e => setUserName(e.target.value)}></input>
                <br></br>
                <label>Password:  </label>
                <input type="text" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></input>
                <br></br>
                
                <input type="submit" value="Sign Up" className="submit"></input>
            </form>
        </div>
    )
}
