import { developerActions } from "./dev-slice";
import { uiActions } from "./ui-slice";
//import { uiActions } from "./ui-slice";

export const fetchDeveloperData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://dev-hiring-app-default-rtdb.europe-west1.firebasedatabase.app/developers.json"
      );

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();
      console.log(data);
      return data;
    };

    try {
      let devData = await fetchData();
      console.log(devData);
      if (!devData) {
        devData = [];
      }
      dispatch(developerActions.replaceDeveloperList(devData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Successfully created new developer.",
        })
      );
    }
  };
};

export const sendDeveloperData = (devData) => {
  return (dispatch) => {
    dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Loading...",
          message: "We are collecting data...",
        })
      );
    const sendData = async () => {
      const response = await fetch(
        "https://dev-hiring-app-default-rtdb.europe-west1.firebasedatabase.app/developers.json",
        {
          method: "PUT",
          body: JSON.stringify(devData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error();
      }

      console.log("success sending data");
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Successfully created new developer.",
        })
      );
    };

    sendData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Developer not created. Network problems.",
        })
      );
    });
  };
};
