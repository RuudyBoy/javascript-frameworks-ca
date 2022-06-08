//import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
//import AuthContext from "../../context/AuthContext";

function Nav() {
	
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/contact">Contact</Link>
		
			<Link to="/login">Login</Link>
		</nav>
	);
}

export default Nav;