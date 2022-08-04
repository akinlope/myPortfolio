import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <div className="navComponent">
                <h1>TOLULOPE</h1>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/aboutMe">AboutMe</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/contact">ContactMe</Link>
                </div>
        </div>
     );
}
 
export default Navbar;