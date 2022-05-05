import { NavLink } from "react-router-dom";

function NavBar({ user }) {
    if (user) {
        return (
            <div>
                <ul>
                    <li><NavLink to="/" exact className="navBar"> Shipments </NavLink></li>
                    <li><NavLink to="/map" exact className="navBar"> Map </NavLink></li>
                    <li><NavLink to="/carrier-list" exact className='navbar'>Carrier List</NavLink></li>
                    <li className="right-nav"><NavLink to="/logout" exact className="navBar">Logout</NavLink></li>
                </ul>
            </div> 
        )
    }
    return (
        <div className="navBar">
            <ul>

                <li className="right-nav">
                    <NavLink to="/signup" exact className="navBar"> SignUp </NavLink>
                </li>
                <li className="right-nav">
                    <NavLink to="/signin" exact className='navbar'> Sign In </NavLink>
                </li>
            </ul>
        </div>
    )
}
export default NavBar