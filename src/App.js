import { Fragment, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Layout from "./ui/Layout";
import Welcome from "./pages/Welcome";
import HireDeveloper from "./pages/HireDeveloper";
import CreateDeveloper from "./pages/CreateDeveloper";
import EditDeveloper from "./pages/EditDeveloper";
import Notification from "./ui/Notification";

import { fetchDeveloperData, sendDeveloperData } from "./store/dev-thunk";
import { fetchHiredData, sendHiredData } from "./store/hired-thunk";

import "./App.css";

let isInit = true;

function App() {
  const developer = useSelector((state) => state.developer);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const hired = useSelector((state) => state.hired);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(fetchDeveloperData());
      dispatch(fetchHiredData());
      setIsLoading(false);
    } catch (error) {
      setError({ message: error.message });
    }
  }, [dispatch]);

  useEffect(() => {
    if (isInit) {
      isInit = false;
      return;
    }

    if (developer.changedDevList) {
      dispatch(sendDeveloperData(developer.developers));
    }

    if (hired.changedHired) {
      dispatch(sendHiredData(hired.hired));
    }
  }, [dispatch, developer, hired]);

  console.log("lsita devs: ",developer);

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
          <Route
            path="/hire-developer"
            element={<HireDeveloper isLoading={isLoading} error={error} />}
          />
          <Route path="new-developer" element={<CreateDeveloper />} />
          <Route path="edit-developer/:id" element={<EditDeveloper />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
      </Layout>
    </Fragment>
  );
}

export default App;
