import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { Home, AboutMe, Projects } from "./Components/index";

const Main = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/aboutme">
        <AboutMe />
      </Route>

      {/* <div id="navbar">
        <h1 id="main-header">Lexi Miller</h1>
        <div id="links">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/about">
            About Me
          </Link>
          <Link to="/portfolio" className="link">
            Portfolio
          </Link>
        </div>
      </div>
      <div id="main-section">
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
      </div> */}
    </>
  );
};

const app = document.getElementById("app");
ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  app
);
