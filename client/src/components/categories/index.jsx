import { Button } from "flowbite-react";
import React from "react";

const Categories = () => {
  return (
    <div className="flex flex-wrap gap-2 mt-4 px-2 py-4 sm:px-4 place-content-center   top-0 z-2">
      <div>
        <Button color="light" pill={true} className="font-bold bg-[#e5e5e5]">
          Starters
        </Button>
      </div>
      <div>
        <Button color="light" pill={true} className="font-bold bg-[#e5e5e5]">
          Pizza
        </Button>
      </div>
      <div>
        <Button color="light" pill={true} className="font-bold bg-[#e5e5e5]">
          Pasta
        </Button>
      </div>
      <div>
        <Button color="light" pill={true} className="font-bold bg-[#e5e5e5]">
          Side Order
        </Button>
      </div>
    </div>
  );
};

export default Categories;
