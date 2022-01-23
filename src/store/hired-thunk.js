import { hiredActions } from "./hired-slice";
import { uiActions } from "./ui-slice";

export const fetchHiredData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://dev-hiring-app-default-rtdb.europe-west1.firebasedatabase.app/hiredDates.json"
      );

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();
      return data;
    };

    try {
      let hiredData = await fetchData();
      console.log("fetched data", hiredData);
      if (!hiredData) {
        hiredData = [];
      }
      dispatch(hiredActions.replaceHiredData(hiredData));
      console.log("fetched data after  replacing");
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

export const sendHiredData = (hiredData) => {
  return (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Loading...",
        message: "We are sending data...",
      })
    );
    const sendData = async () => {
      const response = await fetch(
        "https://dev-hiring-app-default-rtdb.europe-west1.firebasedatabase.app/hiredDates.json",
        {
          method: "PUT",
          body: JSON.stringify(hiredData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        console.log("response not ok when send");
        throw new Error();
      }
      console.log("response ok when send");
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Successfully hired developer.",
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
          message: "Developer thing went wrong not hired. Some Try again.",
        })
      );
      setTimeout(() => {
        dispatch(uiActions.closeNotification());
      }, 4000);
    });
  };
};
