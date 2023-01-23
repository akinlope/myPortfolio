import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import RenderAlert from "./RenderAlert";
import SendMes from "./SendMes";

const ContactMe = ({toClick}) => {

  useEffect(()=> {
    toClick("ContactMe");
  });

    const [ isText, setText]= useState("")
    const [ isEmail, setEmail]= useState("")
    const [ isMessage, setMessage]= useState("")
    const [ status, setStatus] = useState(false)
    const [ emptyField, setEmptyField] = useState(true)


    const handleClickSubmit = (e) => {
        e.preventDefault()

        if(isText.trim().length !== 0 && isEmail.trim().length !== 0 && isMessage.trim().length !== 0){

          emailjs.send("myPortfolio", "myPortfolio", { isText, isEmail, isMessage }, "IqmYLm7fdRwH-eoDR")
        .then((res)=> {

          setText("")
          setEmail("")
          setMessage("")
          setStatus(true)
          setEmptyField(true)
        }).catch((err)=> 
        {console.log("Error", err);}
        );
        }else{
          setEmptyField(false)
        }
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
                rel="noreferrer"
                className="faTw"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://github.com/akinlope"
                target={"_blank"}
                rel="noreferrer"
                className="faGh"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.instagram.com/its.tolulope"
                target={"_blank"}
                rel="noreferrer"
                className="faIg"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          
          <div className="form">
            {status &&<RenderAlert />}
            {!status &&<SendMes />}
            {!emptyField && <p style={{color: "red", fontWeight: "bolder", fontFamily: "Quicksand, sans-serif"}}>Please fill the required fields</p>}
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
              <textarea style={{resize: "none"}}
              name="" id="" cols="30" rows="10"
              required
              value={isMessage}
              onChange={(e)=> {setMessage(e.target.value)}}
              ></textarea>
              <button onClick={handleClickSubmit}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ContactMe;
