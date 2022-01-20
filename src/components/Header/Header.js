import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <h1>Developers</h1>
      <nav>
        <ul className={classes}>
          <li>
            <button className={classes.button}>Home</button>
          </li>
          <li>
            <button className={classes.button}>Hire a Developer</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
