import React from "react";

const customButton = (props: {
  text: string;
  bgColor?: string;
  onClick?: () => {};
}) => {
  return (
    <div className="text-center font-semibold bg-teal-500 px-4 py-2 mr-2 text-white rounded-md cursor-pointer text-sm hover:bg-teal-400">
      <p>{props.text}</p>
    </div>
  );
};

export default customButton;
