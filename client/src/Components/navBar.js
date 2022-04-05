import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <div>
            <NavLink to="/" exact>
                Shipments
            </NavLink>
            <NavLink to="/map" exact>
                Map
            </NavLink>
        </div>
    )
}
export default NavBar