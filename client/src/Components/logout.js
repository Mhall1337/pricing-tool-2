import { useHistory } from "react-router";

export default function Logout({ setUser }) {
  const history = useHistory()

  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        history.push("/signin")
        setUser(null);
      }
    });
  }

  return (
    <div className="logout-container">
      <div className="logout">
        <h3>Log Out</h3>
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  )
}