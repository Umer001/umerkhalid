import React, { useEffect, useState } from "react";
import { Menu, Slider, Categories, ItemPlaceHolder } from "../../components/";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import {
  getProducts,
  getProductsByCat,
} from "../../services/http-services/products";
import { async } from "@firebase/util";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  async function fetchData() {
    await getProducts({
      cbSuccess: ({ status, message, data }) => {
        setProducts(data.data);

        setLoading(false);
        console.log("🚀 ~ file: index.jsx:30 ~ fetchData ~ data", data);
      },
      cbFailure: ({ status, message }) => {
        toast.error(status, message);
        setLoading(false);
      },
    });
  }
  useEffect(() => {
    fetchData();
  }, []);

  const filterProducts = async (id) => {
    console.log("🚀 ~ file: index.jsx:34 ~ filterProducts ~ id", id);
    await getProductsByCat({
      id,
      cbSuccess: ({ status, message, data }) => {
        setProducts(data.data);

        setLoading(false);
        console.log("🚀 ~ file: index.jsx:30 ~ fetchData ~ data", data);
      },
      cbFailure: ({ status, message }) => {
        toast.error(status, message);
        setLoading(false);
      },
    });
  };

  return (
    <>
      <Slider />
      <Categories filterProducts={filterProducts} fetchAll={fetchData} />
      {loading ? <ItemPlaceHolder /> : <Menu data={products} />}
    </>
  );
};

export default Home;
