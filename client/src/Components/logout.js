export default function Logout({setUser}){

    function handleLogout(){
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }

    return(
        <div>
            <button onClick={handleLogout}>logout</button>
        </div>
    )
}