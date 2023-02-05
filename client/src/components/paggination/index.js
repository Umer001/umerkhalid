import React from "react";

const Paggination = ({ page, totalDocuments, pageSize, changePage }) => {
  const generatePaginationButtons = (page, totalDocuments, pageSize) => {
    const totalPages = Math.ceil(totalDocuments / pageSize);
    const buttons = [];

    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          className={`px-3 py-1 mx-1 rounded-lg ${
            i === page ? "bg-yellow-300 text-black-400-" : "bg-gray-200"
          }`}
          onClick={() => changePage(i)}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="flex justify-center my-2">
      {generatePaginationButtons(page, totalDocuments, pageSize)}
    </div>
  );
};

export default Paggination;
