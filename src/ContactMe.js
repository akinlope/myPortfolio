import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
// import { EmailJSResponseStatus } from "@emailjs/browser";
import emailjs from '@emailjs/browser';
import RenderAlert from "./RenderAlert";
import SendMes from "./SendMes";

const ContactMe = () => {
    const [ isText, setText]= useState("")
    const [ isEmail, setEmail]= useState("")
    const [ isMessage, setMessage]= useState("")
    const [ status, setStatus] = useState(false)


    const handleClickSubmit = (e) => {
        e.preventDefault()
        emailjs.send("service_x13ea68", "template_1jq3gep", { isText, isEmail, isMessage }, "IqmYLm7fdRwH-eoDR")
        .then((res)=> {
          console.log("Success", res);
          setText("")
          setEmail("")
          setMessage("")
          setStatus(true)
        }).catch((err)=> 
        {console.log("Error", err);}
        )
    }
        useEffect(()=>{
          if(status === true){
            setTimeout(() => {
              setStatus(false)
            }, 3000);
          }
        },[status])
  

    
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>Let's keep in touch</p>
      <hr />
      <div className="contactMe">
        <div className="container">
          <div className="touch">
            <h2>Get In Touch </h2>
            <div className="icon">
              <a
                href="http://www.twitter.com/Akinlope"
                target={"_blank"}
                className="faTw"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://github.com/akinlope"
                target={"_blank"}
                className="faGh"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.instagram.com/its.tolulope"
                target={"_blank"}
                className="faIg"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          
          <div className="form">
            {status &&<RenderAlert />}
            {!status &&<SendMes />}
            <form onSubmit={handleClickSubmit}>
              <label>Name</label>
              <input 
              type="text"
              required
              value={isText}
              onChange={(e)=> {setText(e.target.value)}}
              />
              <label>Email</label>
              <input 
              type="email" 
              required
              value={isEmail}
              onChange={(e)=> {setEmail(e.target.value)}}
              />
              <label>Message</label>
              <textarea 
              name="" id="" cols="30" rows="10"
              required
              value={isMessage}
              onChange={(e)=> {setMessage(e.target.value)}}
              ></textarea>
              {/* <p>{isMessage}</p> */}
              <button onClick={handleClickSubmit}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ContactMe;
