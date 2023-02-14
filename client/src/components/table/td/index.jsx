import React from "react";

const TD = ({ children, status }) => {
  const statusColors = {
    Processing: "yellow",
    Done: "green",
    Cancel: "red",
  };

  return (
    <td className="px-5 py-5 text-sm bg-white border-b dark:text-white  dark:bg-gray-700 border-gray-200">
      {!status ? (
        <p className="text-gray-900  dark:text-white whitespace-no-wrap">
          {children}
        </p>
      ) : (
        <span
          className={`relative inline-block px-3 py-1 font-semibold  leading-tight text-${statusColors[status]}-900`}
        >
          <span
            aria-hidden="true"
            className={`absolute inset-0 rounded-full opacity-50 bg-${statusColors[status]}-200 `}
          ></span>
          <span className="relative">{status}</span>
        </span>
      )}
    </td>
  );
};

export default TD;
