import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";

//imported pages
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Home from "./Home";
import "./index.css";
import Navbar from "./Navbar";
import Resume from "./Resume";

function App() {
  const [isActive, setIsActive] = useState();

  function myFunction(param) {
    setIsActive(param);
  }

  // useEffect(() => {
  //   myFunction;
  // })

  return (
    <Router>
      <div className="App">
        <Navbar clickClick={isActive} />
        <div className="content">
          <Routes>
            <Route  path="/" element={<Home toClick={myFunction} />} />
              {/* <Home toClick={myFunction}/> */}           
          </Routes>

          <Routes>
            <Route path="/aboutMe" element={<AboutMe toClick={myFunction}/>} />
              {/* <AboutMe toClick={myFunction}/> */}
          </Routes>


          <Routes>
            <Route path="/resume" element={<Resume toClick={myFunction}/>} />
              {/* <Resume toClick={myFunction} /> */}
            
          </Routes>
          <Routes>
            <Route path="/contact" element={<ContactMe toClick={myFunction}/> }/>
              {/* <ContactMe toClick={myFunction}/> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
