import { Button } from "flowbite-react";
import React from "react";

const Categories = () => {
  return (
    <div className="flex flex-wrap gap-2 mt-4 px-2 py-4 sm:px-4 place-content-center  sticky top-0 z-2">
      <div>
        <Button color="light" pill={true} className="font-bold bg-[#e5e5e5]">
          Somewhat Local
        </Button>
      </div>
      <div>
        <Button color="light" pill={true} className="font-bold bg-[#e5e5e5]">
          Dark
        </Button>
      </div>
      <div>
        <Button color="light" pill={true} className="font-bold bg-[#e5e5e5]">
          Light
        </Button>
      </div>
      <div>
        <Button color="light" pill={true} className="font-bold bg-[#e5e5e5]">
          Success
        </Button>
      </div>
      <div>
        <Button color="light" pill={true} className="font-bold bg-[#e5e5e5]">
          Failure
        </Button>
      </div>
      <div>
        <Button color="light" pill={true} className="font-bold bg-[#e5e5e5]">
          Warning
        </Button>
      </div>
      <div>
        <Button color="light" pill={true} className="font-bold bg-[#e5e5e5]">
          Purple
        </Button>
      </div>
    </div>
  );
};

export default Categories;
