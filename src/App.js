import { Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import HireDeveloper from "./pages/HireDeveloper";
import Layout from "./ui/Layout";
import CreateDeveloper from "./pages/CreateDeveloper";
import EditDeveloper from "./pages/EditDeveloper";

import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/hire-developer" element={<HireDeveloper />} />
        <Route path="new-developer" element={<CreateDeveloper />} />
        <Route path="edit-developer/:id" element={<EditDeveloper />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </Layout>
  );
}

export default App;
