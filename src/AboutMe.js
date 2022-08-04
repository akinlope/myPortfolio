import { Link } from "react-router-dom";
import pic from "./img/a.jpg";
import myCV from "./myCV.pdf";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div>
        <h1 className="about"> ABOUT ME</h1>
        <p className="abt">Why choose me?</p>
        <hr />
      </div>

      <div className="aboutCon">
        <div className="aboutImg">
          <img src={pic} alt="" />
        </div>
        <div className="aboutInfo">
          <p>
            I'm a full stack web developer with vast knowledge of HTML, CSS,
            JAVASCRIPT, PYTHON and REACT,JS along with a knack of building web
            applications with utmost efficiency strong efficiency with a HND
            willing to be an asset for an organization.
          </p>

          <b>
            <p className="bold">Here are a Few Highlights:</p>
          </b>
          <li>Full Stack web development</li>
          <li>Interactive Front End as per the design</li>
          <li>React</li>
          <li>Building REST API's</li>
          <li>Managing database</li>
          <div className="aboutBtb">
          <Link to="/contact"><button>Hire Me</button></Link>
            <a href={myCV} download="My_Resume.pdf"><button>Get Resume</button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
