import { useState } from "react";
// import { render } from "react-dom";
import REducation from "./REducation";
import RInterest from "./RInterest";
import RProject from "./RProject";
import RSkills from "./RSkills";
import RWork from "./RWork";


const Resume = () => {

  const [isEducation, setEducation] = useState(true)
  const [isWork, setWork] = useState(false)
  const [isProgramming, setProgramming] = useState(false)
  const [isProject, setProject] = useState(false)
  const [isInterest, setInterest] = useState(false)
  
  return (
    <div className="resume">
      <div>
        <h1 className="resume_h1">Resume</h1>
        <p className="resume_p">My Formal Bio Details</p>
        <hr />
      </div>

      <div className="resumeCon">
        <div className="resumeSidebar">
          <button onClick={()=> {setEducation(!isEducation)}}>Education</button>
          <button onClick={()=>{setWork(!isWork)}}>Work History</button>
          <button onClick={()=>{setProgramming(!isProgramming)}}>Programming Skills</button>
          <button onClick={()=>{setProject(!isProject)}}>Project</button>
          <button onClick={()=>{setInterest(!isInterest)}}>Interest</button>
        </div>

        <div className="resumeInfo">
          { isEducation && <REducation /> }
          { isInterest && <RInterest /> }
          { isProject && <RProject /> }
          { isProgramming && <RSkills /> }
          { isWork && <RWork /> }
        </div>
      </div>
    </div>
  );
};

export default Resume;
