import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Home from "./Home";
import "./index.css";
import Navbar from "./Navbar";
import Resume from "./Resume";

function App() {
  const [isActive, setIsActive] = useState("");

  function myFunction(param) {
    setIsActive(param);
  }

  return (
    <Router>
      <div className="App">
        <Navbar clickClick={isActive} />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home toClick={myFunction}/>
            </Route>
          </Switch>
          <Switch>
            <Route path="/aboutMe">
              <AboutMe toClick={myFunction}/>
            </Route>
          </Switch>
          <Switch>
            <Route path="/resume">
              <Resume toClick={myFunction} />
            </Route>
          </Switch>
          <Switch>
            <Route path="/contact">
              <ContactMe toClick={myFunction}/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
