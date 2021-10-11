import classes from "./NavBar.module.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className={classes.Container}>
      {/* <p>Get in touch with me</p> */}
      <ul>
        <li>
          <a className={classes.Social} href="/">
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a className={classes.Social} href="/">
            <FaGithub />
          </a>
        </li>
        <li>
          <button className={classes.Email}>email</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
