import React from "react";

const dropdownMenu = () => {
  return (
    <div>
      <select
        className="px-4 py-3 outline-none border rounded-lg mr-2"
        name="language"
        id="language"
      >
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="c++">C++</option>
        <option value="java">Java</option>
      </select>
    </div>
  );
};

export default dropdownMenu;
