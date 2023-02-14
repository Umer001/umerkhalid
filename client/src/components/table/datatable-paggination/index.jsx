import React from "react";

const DatatablePaggination = ({
  changePage,
  totalDocuments,
  pageSize,
  page,
}) => {
  const totalPages = Math.ceil(totalDocuments / pageSize);
  const generatePaginationButtons = (
    page,
    totalDocuments,
    pageSize,
    totalPages
  ) => {
    const buttons = [];

    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          className={`w-full px-4 py-2 text-base text-gray-600  border  ${
            i === page
              ? "bg-red-700 text-white"
              : "bg-white dark:text-white  dark:bg-gray-700  hover:bg-gray-100"
          }`}
          onClick={() => changePage(i)}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };
  const prevHandler = (page) => {
    if (page > 1) {
      changePage(page - 1);
    }
  };
  const nextHandler = (page, totalPages) => {
    if (page < totalPages) {
      console.log("🚀 ~ file: index.jsx:36 ~ nextHandler ~ page", page);
      console.log(
        "🚀 ~ file: index.jsx:36 ~ nextHandler ~ totalDocuments",
        totalPages
      );

      changePage(page + 1);
    }
  };
  return (
    <div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between dark:text-white  dark:bg-gray-700">
      <div className="flex items-center">
        <button
          type="button"
          className="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100 dark:text-white  dark:bg-gray-700"
          onClick={() => prevHandler(page)}
        >
          <svg
            width={9}
            fill="currentColor"
            height={8}
            className
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
          </svg>
        </button>
        {generatePaginationButtons(page, totalDocuments, pageSize, totalPages)}

        <button
          type="button"
          onClick={() => nextHandler(page, totalPages)}
          className="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100 dark:text-white  dark:bg-gray-700"
        >
          <svg
            width={9}
            fill="currentColor"
            height={8}
            className
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DatatablePaggination;
