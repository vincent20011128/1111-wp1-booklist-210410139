import React from "react";

const Category_39 = ({ categories }) => {
  console.log("categories", categories);
  return (
    <div className="btn-container">
      {map((category, index) => {
        const { all, breakfast, lunch, shakes, dinner } = category;
        return (
          <button
            key={index}
            type="button"
            className="filter-btn"
            data-id="all"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Category_39;
