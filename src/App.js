import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categorylist from "./pages/categorylist";
import Expensetracking from "./pages/expensetracking";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Expensetracking/>} />
        <Route exact path="/catagory" element={<Categorylist/>} />
      </Routes>
    </Router>
  );
};

export default App;
