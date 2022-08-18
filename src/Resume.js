import { useState } from "react";
// import { render } from "react-dom";
import REducation from "./REducation";
import RInterest from "./RInterest";
import RProject from "./RProject";
import RSkills from "./RSkills";
import RWork from "./RWork";

const Resume = ({toClick}) => {
  toClick("Resume");

  
  const componentsEnum = {
    education: REducation,
    work: RWork,
    project: RProject,
    skill: RSkills,
    interest: RInterest
  };


  const [resumeComponent, setResumeComponent] = useState(
    componentsEnum.education
  );
  const [isActive, setIsActive] = useState("a");

  return (
    <div className="resume">
      <div>
        <h1 className="resume_h1">Resume</h1>
        <p className="resume_p">My Formal Bio Details</p>
        <hr />
      </div>

      <div className="resumeCon">
        <div className="resumeSidebar">
          <button
            onClick={() => {
              setResumeComponent(componentsEnum.education);
              setIsActive("a");
            }}
            style={{ backgroundColor: isActive === "a" && "#0095b7" }}
          >
            Education
          </button>
          <button
            onClick={() => {
              setResumeComponent(componentsEnum.work);
              setIsActive("b");
            }}
            style={{ backgroundColor: isActive === "b" && "#0095b7" }}
          >
            Work History
          </button>
          <button
            onClick={() => {
              setResumeComponent(componentsEnum.skill);
              setIsActive("c");
            }}
            style={{ backgroundColor: isActive === "c" && "#0095b7" }}
          >
            Programming Skills
          </button>
          <button
            onClick={() => {
              setResumeComponent(componentsEnum.project);
              setIsActive("d");
            }}
            style={{ backgroundColor: isActive === "d" && "#0095b7" }}
          >
            Project
          </button>
          <button
            onClick={() => {
              setResumeComponent(componentsEnum.interest);
              setIsActive("e");
            }}
            style={{ backgroundColor: isActive === "e" && "#0095b7" }}
          >
            Interest
          </button>
        </div>

        <div className="resumeInfo">{resumeComponent}</div>
      </div>
    </div>
  );
};

export default Resume;

//
