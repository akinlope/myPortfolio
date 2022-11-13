import { Link } from "react-router-dom";
const Navbar = ({clickClick}) => {


  return (
    <div className="navComponent">
      <h1>TOLULOPE</h1>
      <div className="links">
        <Link
          style={{
            backgroundColor: clickClick === "Home" && "#0095b7",
            color: clickClick === "Home" && "white",
            fontWeight: clickClick === "Home" && "bolder",
          }}
          to="/"
        >
          Home
        </Link>
        <Link
          style={{
            backgroundColor: clickClick === "AboutMe" && "#0095b7",
            color: clickClick === "AboutMe" && "white",
            fontWeight: clickClick === "AboutMe" && "bolder",
          }}
          to="/aboutMe"
        >
          About_Me
        </Link>
        <Link
          style={{
            backgroundColor: clickClick === "Resume" && "#0095b7",
            color: clickClick === "Resume" && "white",
            fontWeight: clickClick === "Resume" && "bolder",
          }}
          to="/resume"
        >
          Resume
        </Link>
        <Link
          style={{
            backgroundColor: clickClick === "ContactMe" && "#0095b7",
            color: clickClick === "ContactMe" && "white",
            fontWeight: clickClick === "ContactMe" && "bolder",
          }}
          to="/contact"
        >
          Contact_Me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
