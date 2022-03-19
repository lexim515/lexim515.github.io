import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faAt } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <div id="main">
        <div id="buttons-to-pages">
          <div id="buttons">
            <Link className="link" to="/projects">
              <button className="button-to-pages">Projects</button>
            </Link>
            <Link className="link" to="/aboutme">
              <button className="button-to-pages">About Me</button>
            </Link>
          </div>
          <div id="icons">
            <a className="icon-footer" href="https://github.com/lexim515">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              className="icon-footer"
              href="https://www.linkedin.com/in/alexis-miller-49b383101/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a className="icon-footer">
              <FontAwesomeIcon icon={faAt} />
            </a>
          </div>
        </div>
        <div id="main-blurb">
          <h1 id="individual-name">Lexi Miller</h1>
          <p id="about-me-paragraph">
            As a Fullstack Software Engineer, my goal is to use my skills as a
            coder, designer, and problem solver to come up with new ideas and
            improve my work. I aim to apply my skills to provide an{" "}
            <span>enjoyable user experience</span> and{" "}
            <span>neatly-written code</span>. I am proficient in JavaScript,
            HTML5, CSS3, React.js, Node.js, Express, SQL, and PostgresQL.
          </p>
        </div>
      </div>
      {/* <section className="header">
        <div className="text-section">
          <h3 className="individual-links">
            <Link className="link" to="/projects">
              <button>Projects</button>
            </Link>
            <Link className="link" to="/aboutme">
              <button>About Me</button>
            </Link>
          </h3>
        </div>
        <div id="photo-section-1">
          <div className="text-section-1">
            <h1 className="individual-name">Lexi Miller</h1>
            <p id="about-me-paragraph">
              As a Fullstack Software Engineer, my goal is to use my skills as a
              coder, designer, and problem solver to come up with new ideas and
              improve my work. I aim to apply my skills to provide an{" "}
              <span>enjoyable user experience</span> and{" "}
              <span>neatly-written code</span>. I am proficient in JavaScript,
              HTML5, CSS3, React.js, Node.js, Express, SQL, and PostgresQL.
            </p>
          </div>
        </div>
      </section> */}
      {/* <footer>
        <h2 className="individual-icons">
          <a href="https://github.com/lexim515">
            <FontAwesomeIcon className="icon-footer" icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/alexis-miller-49b383101/">
            <FontAwesomeIcon className="icon-footer" icon={faLinkedin} />
          </a>
          <FontAwesomeIcon className="icon-footer" icon={faAt} />
        </h2>
      </footer> */}
    </>
  );
};

export default Home;
