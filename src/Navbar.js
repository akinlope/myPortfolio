import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {

  
        const [isActive, setIsActive] = useState("a")
    
    
    return ( 
        <div className="navComponent">
                <h1>TOLULOPE</h1>
                <div className="links">
                    <Link onClick={()=>{setIsActive("a")}} style={{backgroundColor: isActive === "a" && "#0095b7", color: isActive === "a" && "white", fontWeight: isActive === "a" && "bolder"}} to="/">Home</Link>
                    <Link onClick={()=>{setIsActive("b")}} style={{backgroundColor: isActive === "b" && "#0095b7", color: isActive === "b" && "white", fontWeight: isActive === "b" && "bolder"}} to="/aboutMe">AboutMe</Link>
                    <Link onClick={()=>{setIsActive("c")}} style={{backgroundColor: isActive === "c" && "#0095b7", color: isActive === "c" && "white", fontWeight: isActive === "c" && "bolder"}} to="/resume">Resume</Link>
                    <Link onClick={()=>{setIsActive("d")}} style={{backgroundColor: isActive === "d" && "#0095b7", color: isActive === "d" && "white", fontWeight: isActive === "d" && "bolder"}} to="/contact">ContactMe</Link>
                </div>
        </div>
     );
}
 
export default Navbar;