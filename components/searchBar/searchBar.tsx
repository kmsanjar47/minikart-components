import React from "react";

const searchBar = () => {
  return (
    <div>
      <input
        className="w-96 relative bg-teal-300 bg-opacity-10  h-12 rounded-lg focus:outline-[0.1px] focus:outline-teal-500  p-4"
        placeholder="Search (type at least 3 character)"
        type="text"
        name=""
        id=""
      />
    </div>
  );
};

export default searchBar;
