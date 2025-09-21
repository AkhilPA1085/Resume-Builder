import React from "react";

const CustomTabTitle = ({ icon, title }) => {
  return (
    <div className="flex items-center space-x-2">
      {icon}
      <span className="hidden md:inline">{title}</span>
    </div>
  );
};

export default CustomTabTitle;
