import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { setCategoryList } from "../redux/slice";
const Categorylist = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const categoryDetails = useSelector(
    (state) => state.commonreducer.categoryList
  );

  console.log("cat", categoryDetails);
  const [activeTab, setActiveTab] = useState("expenses");
  const [newCategory, setNewCategory] = useState("");

  const cardStyle = {
    width: "500px",
    margin: "0 auto",
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "expenses") {
      // Navigate to the Category List page when the "Category" tab is clicked
      navigate("/");
    }
  };

  const handleCategoryChange = (categoryName, value) => {
    // Update categoryDetails in Redux store
    const updatedCategoryDetails = categoryDetails.map((category) =>
      category.name === categoryName ? { ...category, value } : category
    );
    dispatch(setCategoryList(updatedCategoryDetails));
  };

  const handleAddCategory = () => {
    if (newCategory.trim() === "") {
      alert("Category name cannot be empty.");
      return;
    }

    dispatch(setCategoryList([...categoryDetails, { name: newCategory }]));

    // Clear the input field
    setNewCategory("");
  };

  const handleRemoveCategory = (categoryName) => {
    const updatedCategoryDetails = categoryDetails.filter(
      (category) => category.name !== categoryName
    );
    dispatch(setCategoryList(updatedCategoryDetails));
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card text-center" style={cardStyle}>
        <div className="card-header ">
          <h6 className="flex-grow-1 mb-0">Expense Tracking</h6>
        </div>
        <div className="card-body p-3">
          {categoryDetails && categoryDetails.map((category, index) => (
            <>
              <div key={index} className="row">
                <div className="col-md-6">
                  <div className="data-field">{category.name}</div>
                </div>
                <div className="col-md-6">
                  <button
                    className="btn btn-link"
                    onClick={() => handleRemoveCategory(category.name)}
                  >
                    <i className="fa fa-times text-danger"></i>
                  </button>
                </div>
              </div>
              <hr className="bg-primary" />
            </>
          ))}
          <div className="">
            <div className="row p-3">
              <input
                type="text"
                placeholder="Add Category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
            </div>
            <div className=" d-flex justify-content-end ">
              <button className="btn btn-primary" onClick={handleAddCategory}>
                Add
              </button>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Categorylist;
