import { developerActions } from "./dev-slice";
import { uiActions } from "./ui-slice";

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
      return data;
    };

    try {
      let devData = await fetchData();
      if (!devData) {
        devData = [];
      }
      dispatch(developerActions.replaceDeveloperList(devData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Something went wrong!",
        })
      );
      setTimeout(() => {
        dispatch(uiActions.closeNotification());
      }, 4000);
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
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Successfully saved developer data.",
        })
      );
      setTimeout(() => {
        dispatch(uiActions.closeNotification());
      }, 4000);
    };

    sendData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Developers data not saved. Try again.",
        })
      );
      setTimeout(() => {
        dispatch(uiActions.closeNotification());
      }, 4000);
    });
  };
};
