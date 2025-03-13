import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import withLayout from "./layouts/withLayout";

const HomePageWithLayout = withLayout(HomePage);
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageWithLayout />} />
        {/* <Route path="/news" element={<NewPageWithLayout />} /> */}
      </Routes>
    </Router>
  );
};


export default App;
