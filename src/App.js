import { Fragment, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Layout from "./ui/Layout";
import Welcome from "./pages/Welcome";
import HireDeveloper from "./pages/HireDeveloper";
import CreateDeveloper from "./pages/CreateDeveloper";
import EditDeveloper from "./pages/EditDeveloper";
import Notification from "./ui/Notification";

import { fetchDeveloperData, sendDeveloperData } from "./store/dev-thunk";

import "./App.css";

let isInit = true;

function App() {
  const developer = useSelector((state) => state.developer);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDeveloperData());
  }, [dispatch]);

  useEffect(() => {
    if (isInit) {
      isInit = false;
      return;
    }

    if (developer.changedDevList) {
      dispatch(sendDeveloperData(developer.developers));
    }
  }, [dispatch, developer]);

  console.log("from app", developer.developers);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/hire-developer" element={<HireDeveloper />} />
          <Route path="new-developer" element={<CreateDeveloper />} />
          <Route path="edit-developer/:id" element={<EditDeveloper />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
      </Layout>
    </Fragment>
  );
}

export default App;
