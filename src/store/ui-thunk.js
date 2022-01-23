// import { uiActions } from "./ui-slice";

// let nextNotificationId;

// const showNotificationWithTimeout = (notification) => {
//     return (dispatch) => {

//         const id = nextNotificationId++;
//         dispatch(uiActions.showNotification(notification));

//         setTimeout(() => {
//             dispatch(uiActions.closeNotification());
//         }, 3000);
//     }
// }