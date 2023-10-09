import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
const Expensetracking = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("expenses");
  const cardStyle = {
    width: "500px", // Set the width to 300 pixels
    margin: "0 auto", // Center the card horizontally
  };
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "category") {
      // Navigate to the Category List page when the "Category" tab is clicked
      navigate("/catagory");
    }
  };
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card text-center"style={cardStyle}>
        <div className="card-header d-flex justify-content-center align-items-center">
          <h6 className="flex-grow-1 mb-0">Expense Tracking</h6>
          <button className="btn btn-primary">Add</button>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <div className="data-field">Field 1:</div>
            </div>
            <div className="col-md-6">
              <div className="data-amount">$100.00</div>
            </div>
          </div>
        <hr className="bg-primary" />
          <div className="row">
            <div className="col-md-6">
              <div className="data-field">Field 2:</div>
            </div>
            <div className="col-md-6">
              <div className="data-amount">$200.00</div>
            </div>
          </div>
          <hr className="bg-primary" />
          <div className="row">
            <div className="col-md-6">
              <div className="data-field">Field 3:</div>
            </div>
            <div className="col-md-6">
              <div className="data-amount">$300.00</div>
            </div>
          </div>
          <hr className="bg-primary" />
         
        </div>
        <div className="card-footer text-body-secondary">
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "expenses" ? "active" : ""
                }`}
                onClick={() => handleTabClick("expenses")}
              >
                Expenses
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "category" ? "active" : ""
                }`}
                onClick={() => handleTabClick("category")}
              >
                Category
              </button>
            </li>
          </ul>
        </div>   </div>
    </div>
  );
};

export default Expensetracking;
