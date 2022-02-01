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
import Admin from "./pages/Admin";
import DevelopersList from "./components/Developer/DevelopersList";
import HiredDevelopers from "./pages/HiredDevelopers";

let isInit = true;

function App() {
  const developers = useSelector((state) => state.developer);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const hired = useSelector((state) => state.hired);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    try {
      dispatch(fetchDeveloperData());
      dispatch(fetchHiredData());
      setIsLoading(false);
    } catch (error) {
      setError({ message: error.message });
      setIsLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    if (isInit) {
      isInit = false;
      return;
    }

    if (developers.changedDevList) {
      dispatch(sendDeveloperData(developers.developers));
    }

    if (hired.changedHired) {
      dispatch(sendHiredData(hired.hired));
    }
  }, [dispatch, developers, hired]);

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
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/hire-developer"
            element={<HireDeveloper isLoading={isLoading} error={error} />}
          />
          <Route path="/admin/new-developer" element={<CreateDeveloper />} />
          <Route path="/admin/edit-developer" element={<DevelopersList />} />
          <Route path="/admin/edit-developer/:id" element={<EditDeveloper />} />
          <Route path="/admin/hired-developers" element={<HiredDevelopers />} />
          <Route path="/*" element={<Welcome />} />
        </Routes>
      </Layout>
    </Fragment>
  );
}

export default App;
