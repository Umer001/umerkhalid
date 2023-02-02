import React from "react";
import ItemCard from "./item-card";

const Menu = ({ data }) => {
  return (
    <div className="  grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-4  px-2  py-4">
      {data?.map((item) => {
        return <ItemCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Menu;
