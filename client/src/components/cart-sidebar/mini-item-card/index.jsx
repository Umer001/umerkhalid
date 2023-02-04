import React from "react";

const MiniitemCard = ({
  item,
  handleIncreseProduct,
  handleRemoveProduct,
  handleDecreaseProduct,
  actions,
}) => {
  return (
    <div className="flex border-t border-solid py-[6px] px-[6px] pr-0 relative cart-item">
      <div className="w-[20px] h-[20px] font-semibold bg-yellow-300 absolute top-[6px] left-0 flex justify-center items-center text-sm   rounded z-10">
        {item.quantity}
      </div>
      <div className="relative max-h-[60px] max-w-[60px] h-[35vw] w-[35vw] rounded  overflow-hidden mx-2">
        <span>
          <img
            title={item.name}
            alt={item.name}
            sizes="100vw"
            src={item.api_featured_image}
            decoding="async"
            data-nimg="fill"
            className="absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full min-h-full max-w-full max-h-full object-contain"
          />
        </span>
      </div>
      <div className="flex flex-col">
        <div className="font-bold text-black-500 text-md "> {item.name} </div>
        <div className="mb-3 text-sm text-gray-500 dark:text-gray-400">
          {item.name}
        </div>
        <div className="flex align-items-center gap-5">
          {actions ? (
            <div className="flex align-items-center gap-3">
              {item.quantity > 1 ? (
                <div
                  className="w-[20px] h-[20px] text-center leading-[17px] border-0 transition-all duration-300 ease-in-out rounded bg-yellow-300 cursor-pointer"
                  data-type="plus"
                  onClick={() => handleDecreaseProduct(item)}
                >
                  <span className="fa fa-minus cart-trash" />
                </div>
              ) : (
                <div
                  onClick={() => handleRemoveProduct(item)}
                  className="w-[20px] h-[20px] text-center leading-[17px] border-0 transition-all duration-300 ease-in-out rounded bg-yellow-300 cursor-pointer"
                >
                  <span className="fa fa-trash cart-trash" />
                </div>
              )}

              <div
                className="w-[20px] h-[20px] text-center leading-[20px] border-0 transition-all duration-300 ease-in-out rounded bg-yellow-300 cursor-pointer"
                data-type="plus"
                onClick={() => handleIncreseProduct(item)}
              >
                <span className="fa fa-plus cart-plus" />
              </div>
            </div>
          ) : (
            ""
          )}

          <span
            className="flex h-fit items-center gap-1 font-semibold     dark:bg-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 rounded px-2 py-0.5 p-1 text-sm w-fit"
            data-testid="flowbite-badge"
          >
            Rs. {parseFloat(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MiniitemCard;
