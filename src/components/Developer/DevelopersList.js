import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { developerActions } from "../../store/dev-slice";
import classes from "./DevelopersList.module.css";

const DevelopersList = () => {
  const developers = useSelector((state) => state.developer.developers);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const editDevHandler = (id) => {
    navigate(`/edit-developer/${id}`);
  };

  const deleteDevHandler = (id) => {
    dispatch(developerActions.removeDeveloper(id));
  };

  if (developers.length === 0) {
    return <h1>No developers to hire!</h1>;
  }

  return (
    <div>
      {developers.map((dev) => {
        return (
          <li key={dev.id}>
            <div>
              <h2>{dev.name} </h2>
              <p>{dev.email}</p>
              <button
                onClick={() => {
                  return editDevHandler(dev.id);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  return deleteDevHandler(dev.id);
                }}
              >
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </div>
  );
};

export default DevelopersList;
