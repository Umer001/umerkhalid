import { Badge, Button, Spinner } from "flowbite-react";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { slice } from "../../../store/slices/cart";

const ItemCard = ({ item }) => {
  const [add, setAdd] = useState(false);
  const handleAddToCart = () => {
    setAdd(true);
    dispatch(slice.actions.addToCart(item));
    toast.success("Item added to cart");
    setAdd(false);
  };
  const dispatch = useDispatch();
  return (
    <div
      className="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800     max-w-xl  flex-row"
      data-testid="flowbite-card"
    >
      <img
        alt={item.name}
        className="h-auto w-40 rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={item.api_featured_image}
      />
      <div className="flex h-full flex-col  gap-2 p-3">
        <a href="#">
          <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
            {item.name}
          </h5>
        </a>
        <div className="flex items-center">
          <p className="text-sm	">{item.name}</p>
        </div>{" "}
        <Badge color="failure" className="w-fit">
          Rs. {item.price}
        </Badge>
        <span className="text-xl font-bold text-gray-900 dark:text-white"></span>
        <div className="flex items-center justify-between">
          <button
            onClick={handleAddToCart}
            className="text-white bg-red-700 border border-transparent hover:bg-red-800 focus:ring-4 focus:ring-red-300 disabled:hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 dark:disabled:hover:bg-red-600 focus:!ring-2 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded"
            type="button"
          >
            <span className="flex items-center  text-md px-2 py-0">
              {!add ? "Add to cart" : "Adding..."}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
