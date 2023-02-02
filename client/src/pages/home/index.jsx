import React from "react";
import { Menu, Slider, Categories, ItemPlaceHolder } from "../../components/";
import axios from "axios";
import { useQuery } from "react-query";
const Home = () => {
  const getProducts = async () => {
    const { data } = await axios.get(
      "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    );
    //console.log("🚀 ~ file: index.jsx:12 ~ getProducts ~ data", data);

    return data;
  };
  const { data, isLoading } = useQuery("Products", getProducts, {
    enabled: true,
  });
  return (
    <>
      <Slider />
      <Categories />
      {isLoading ? <ItemPlaceHolder /> : <Menu data={data} />}
    </>
  );
};

export default Home;
