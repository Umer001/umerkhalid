import React from "react";

const TH = ({ children }) => {
  return (
    <th
      scope="col"
      className="px-5 py-3 text-sm font-normal text-left   uppercase bg-red-700  text-white   dark:bg-gray-700 border-b border-gray-200"
    >
      {children}
    </th>
  );
};

export default TH;
