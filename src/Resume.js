import { useState } from "react";
// import { render } from "react-dom";
import REducation from "./REducation";
import RInterest from "./RInterest";
import RProject from "./RProject";
import RSkills from "./RSkills";
import RWork from "./RWork";


const Resume = () => {
  const componentsEnum = {
    education: REducation,
    work: RWork,
    programming: RProject,
    project: RSkills,
    interest: RInterest
  }
  const [resumeComponent, setResumeComponent] = useState(componentsEnum.education);
  return (
    <div className="resume">
      <div>
        <h1 className="resume_h1">Resume</h1>
        <p className="resume_p">My Formal Bio Details</p>
        <hr />
      </div>

      <div className="resumeCon">
        <div className="resumeSidebar">
          <button onClick={()=> {setResumeComponent(componentsEnum.education)}}>Education</button>
          <button onClick={()=>{setResumeComponent(componentsEnum.work)}}>Work History</button>
          <button onClick={()=>{setResumeComponent(componentsEnum.programming)}}>Programming Skills</button>
          <button onClick={()=>{setResumeComponent(componentsEnum.project)}}>Project</button>
          <button onClick={()=>{setResumeComponent(componentsEnum.interest)}}>Interest</button>
        </div>

        <div className="resumeInfo">
          {resumeComponent}
        </div>
      </div>
    </div>
  );
};

export default Resume;
