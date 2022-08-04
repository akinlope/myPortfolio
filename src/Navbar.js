import { Link } from "react-router-dom";
const Navbar = () => {
// let btnContainer = document.getElementsByClassName("links");
// let btns = btnContainer.querySelectorAll(".btn");
    
// for(let i=0; i<btns.length; i++){
//     btns[i].addEventListener("click", ()=>{
//         let current = document.getElementsByClassName("active")
//         current[0].className = current[0].className.replace(" active")
//         this.className += " active"
//     })
// }
    
    return ( 
        <div className="navComponent">
                <h1>TOLULOPE</h1>
                <div className="links">
                    <Link className="btn" to="/">Home</Link>
                    <Link className="btn" to="/aboutMe">AboutMe</Link>
                    <Link className="btn" to="/resume">Resume</Link>
                    <Link className="btn" to="/contact">ContactMe</Link>
                </div>
        </div>
     );
}
 
export default Navbar;