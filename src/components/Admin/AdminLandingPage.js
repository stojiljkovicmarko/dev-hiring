import { Link } from "react-router-dom";

import classes from "./AdminLandingPage.module.css";

const AdminLandingPage = (props) => {
  return (
    <div className={classes["admin-container"]}>
      <Link to="/admin/new-developer">
        {" "}
        <div className={classes.option}>CREATE</div>{" "}
      </Link>
      <Link to="/admin/edit-developer">
        {" "}
        <div className={classes.option}>
          EDIT /
          <br />
          DELETE
        </div>{" "}
      </Link>
    </div>
  );
};

export default AdminLandingPage;
