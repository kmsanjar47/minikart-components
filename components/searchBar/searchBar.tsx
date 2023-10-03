import React from "react";

const searchBar = () => {
  return (
    <div>
      <input
        className="w-96 relative bg-teal-500 bg-opacity-10  h-12 rounded-lg focus:outline-teal-500 focus:outline-1 p-4"
        placeholder="Search (type at least 3 character)"
        type="text"
        name=""
        id=""
      />
    </div>
  );
};

export default searchBar;
