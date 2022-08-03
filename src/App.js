import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutMe from "./AboutMe";
import Home from "./Home";
import "./index.css";
import Navbar from "./Navbar";
import Resume from "./Resume";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Switch>
            <Route path="/aboutMe">
              <AboutMe />
            </Route>
          </Switch>
          <Switch>
            <Route path="/resume">
              <Resume />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
