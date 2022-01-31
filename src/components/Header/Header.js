import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <Link to="/welcome" className={classes.logo}>
        Developers
      </Link>
      <input className={classes["side-menu"]} type="checkbox" id="side-menu" />
      <label className={classes.hamburger} htmlFor="side-menu">
        <span className={classes["hamburger-line"]}></span>
      </label>
      <nav className={classes.nav}>
        <ul className={classes}>
          <li>
            <Link to="/admin" className={classes.button}>
              <button>Admin</button>
            </Link>
          </li>
          <li>
            <Link to="/hire-developer" className={`${classes.button}`}>
              <button className={classes["hire-btn"]}>Hire developer</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
