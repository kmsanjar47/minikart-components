import React from "react";

function navbarItem(props: { text: string; onClick?: () => {} }) {
  return (
    <div
      className="mr-3 hover:text-teal-500 cursor-pointer"
      onClick={props.onClick}
    >
      <p>{props.text}</p>
    </div>
  );
}

export default navbarItem;
