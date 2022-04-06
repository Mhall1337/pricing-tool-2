import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <div className="navBar">
            <NavLink to="/" exact className="navBar">
                Shipments
            </NavLink>
            <NavLink to="/map" exact className="navBar">
                Map
            </NavLink>
        </div>
    )
}
export default NavBar