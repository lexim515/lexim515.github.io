import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import photo from "../photo/Screen Shot 2022-03-14 at 9.48.49 AM.png";
import photoJuicebox from "../photoJuicebox/Screen Shot 2022-03-19 at 1.06.14 PM.png";
import photoFitness from "../photoFitness/Screen Shot 2022-03-19 at 12.11.04 PM.png";

const Projects = () => {
  return (
    <>
      <section id="projects">
        <section id="project-1">
          <div id="photo-section-1">
            <img src={photo}></img>
          </div>
          <div id="text-section-1">
            <h2 className="individual-title">Mock Craig's List</h2>
            <p className="individual-about">
              Used React.js to make a mock Craig's List website. Used CRUD to
              make requests to the API and used authentication via JSON Web
              Tokens. Users are able to register for an account and login, look
              at posts, send messages to the post author, create new posts, edit
              posts that they are the author of, and delete posts that they are
              the author of.
            </p>
            <a
              className="link-to-pages"
              target="_blank"
              href="https://gifted-colden-1404b5.netlify.app/"
            >
              <h3 className="individual">Link to project</h3>
            </a>
            <a
              className="link-to-pages"
              target="_blank"
              href="https://github.com/lexim515/strangersthings"
            >
              <h3 className="individual">Link to GitHub Repo</h3>
            </a>
          </div>
        </section>
        <hr></hr>
        <section id="project-2">
          <div id="text-section-2">
            <h2 className="individual-title">Juicebox Dev</h2>
            <p className="individual-about">
              Backend only Tumblr clone. Used PostgresQL to create and
              manipulate the database. Used Node.js and Express to build an API
              and web server that responds to client requests. A JSON web token
              was given to a user to authenticate the user and allow them to
              change or delete posts.
            </p>
            <a
              className="link-to-pages"
              target="_blank"
              href="https://github.com/lexim515/juicebox-dev"
            >
              <h3 className="individual">Link to GitHub Repo</h3>
            </a>
          </div>
          <div id="photo-section-2">
            <img src={photoJuicebox}></img>
          </div>
        </section>
        <hr></hr>
        <section id="project-3">
          <div id="photo-section-3">
            <img src={photoFitness}></img>
          </div>
          <div id="text-section-3">
            <h2 className="individual-title">Work in Progress ... </h2>
            <p className="individual-about">About this project</p>
            <h3 className="individual">Link to project github/url</h3>
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

export default Projects;
