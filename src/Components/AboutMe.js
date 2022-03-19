import React from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faLaptopCode,
  faBriefcase,
  faAt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import pdf from "../../src/pdf/LexiMiller_Resume.pdf";

const AboutMe = () => {
  return (
    <>
      <section className="main-about-me">
        <div id="about-me">
          <h2 id="head">About me</h2>
          <p id="about-paragraph">
            I have a background in Biochemistry and I'm proficient in
            JavaScript, React.js, HTML5, CSS3, Node.js, Express, SQL, and
            PostgresQL. I decided to try coding through Codecademy because it
            seemed that coding required some of the same skills that it takes to
            be a chemist, like problem solving, planning, testing, and
            organization. I loved coding immediately and knew I wanted to switch
            careers into it. I also knew it would be much harder to do without a
            certification or a degree, so I decided to enroll at Fullstack
            Academy as a Web Development Student. I’ve had a lot of moments
            throughout the bootcamp where I realized that I’ve been sitting
            working on a project for hours and didn’t even realize how much time
            had passed and didn’t want to stop until I figured out the problem.
            I’ll be graduating from Fullstack at the end of April, but would
            love to find a job before graduating and start putting my skills to
            use and furthering my knowledge. I'm fueled by a passion to solve
            problems in an efficient and creative way and by a desire to
            continuously learn new technlogies and concepts.
          </p>
        </div>

        <hr></hr>

        <section id="experiences">
          <div id="jcu">
            <FontAwesomeIcon className="jcu-icon" icon={faGraduationCap} />
            <h3 className="title">John Carroll University</h3>
            <p className="years">2014-2018</p>
            <a
              className="link-to-pages"
              target="_blank"
              href="https://jcu.edu/academics/chemistry/programs/biochemistry-concentration"
            >
              <p className="paragraph">B.S. in Chemistry</p>
            </a>

            <p className="paragraph"> Concentration in Biochemistry</p>
          </div>
          <hr></hr>
          <div id="fullstack">
            <FontAwesomeIcon className="fullstack-icon" icon={faLaptopCode} />
            <h3 className="title">Fullstack Academy</h3>
            <p className="years">2021 - 2022</p>
            <a
              target="_blank"
              className="link-to-pages"
              href="https://bootcamp.csuohio.edu/coding"
            >
              <p className="paragraph">Web Development Program</p>
            </a>

            <p className="paragraph">
              Completed 25 week program that covered front-end and back-end
              development, including JavaScript, React, SQL, and much more.
            </p>
          </div>
          <hr></hr>
          <div id="resume">
            <FontAwesomeIcon className="resume-icon" icon={faBriefcase} />
            <h3 className="title">Experience</h3>
            <a className="link-to-pages" href={pdf} target="_blank">
              <p className="paragraph">Resume</p>
            </a>
            <p className="paragraph">
              Previous industry work in healthcare and chemistry. Proficient in
              JavaScript, React, Node, Express, HTML/CSS, and more.
            </p>
          </div>
        </section>
      </section>
      <footer>
        <h2 className="individual-icons">
          <a href="https://github.com/lexim515">
            <FontAwesomeIcon className="icon-footer" icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/alexis-miller-49b383101/">
            <FontAwesomeIcon className="icon-footer" icon={faLinkedin} />
          </a>
          <FontAwesomeIcon className="icon-footer" icon={faAt} />
        </h2>
        <Link id="back-home" to="/">
          Home Page
        </Link>
      </footer>
    </>
  );
};

export default AboutMe;
