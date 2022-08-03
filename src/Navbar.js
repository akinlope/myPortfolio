import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <div className="navComponent">
                <h1>TOLULOPE</h1>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/aboutMe">AboutMe</Link>
                    <Link to="/resume">Resume</Link>
                    {/* <a href="">Testimonial</a> */}
                    <Link to="">ContactMe</Link>
                </div>
        </div>
     );
}
 
export default Navbar;