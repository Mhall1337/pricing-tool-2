export default function Logout({ setUser }) {

  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
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