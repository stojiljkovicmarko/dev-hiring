import { Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import HireDeveloper from "./pages/HireDeveloper";
import Layout from "./ui/Layout";
import CreateDeveloper from "./pages/CreateDeveloper";
import EditDeveloper from "./pages/EditDeveloper";

import "./App.css";
import { Fragment } from "react";
import Notification from "./ui/Notification";
import { useSelector } from "react-redux";

function App() {
  const notification = useSelector((state) => state.ui.notification);

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
