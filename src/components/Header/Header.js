import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <h1>Developers</h1>
      <nav>
        <ul className={classes}>
          <li>
            <Link to="/welcome" className={classes.button}>
              <button>Home</button>
            </Link>
          </li>
          <li>
            <Link to="/hire-developer" className={classes.button}>
              <button>Hire developer</button>
            </Link>
          </li>
          <li>
            <Link to="/new-developer" className={classes.button}>
              <button>Create developer</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
