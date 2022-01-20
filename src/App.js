import { Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Layout from "./ui/Layout";

import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </Layout>
  );
}

export default App;
