import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import pic from "./img/a.jpg";
import myCV from "./myCV.pdf";
const Home = ({toClick}) => {
  toClick("Home");
  return (
    <div className="home">
      <div className="myInfo">
        <div className="icon">
            <a href="http://www.twitter.com/Akinlope" target={"_blank"} className="faTw"><FontAwesomeIcon  icon={faTwitter}/></a>
            <a href="https://github.com/akinlope" target={"_blank"} className="faGh"><FontAwesomeIcon  icon={faGithub}/></a>
            <a href="https://www.instagram.com/its.tolulope" target={"_blank"} className="faIg"><FontAwesomeIcon  icon={faInstagram}/></a>  
        </div>
        <h2>Hello, I'm Tolu</h2>
        <h1>Full stack Developer</h1>
        <p>Knack of building applications with front and back end operations</p>
        <div className="infoBtn">
            <Link to="/contact"><button>Hire Me</button></Link>
            <a href={myCV} download="My_Resume.pdf"><button>Get Resume</button></a>
        </div>
      </div>

      <div className="myImg">
        <img src={pic} alt="" />
      </div>
    </div>
  );
};

export default Home;
