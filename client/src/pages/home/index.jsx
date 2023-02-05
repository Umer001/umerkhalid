import React, { useEffect, useState } from "react";
import { Menu, Slider, Categories, ItemPlaceHolder } from "../../components/";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { getProducts } from "../../services/http-services/products";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
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
    fetchData();
  }, []);
  return (
    <>
      <Slider />
      <Categories />
      {loading ? <ItemPlaceHolder /> : <Menu data={products} />}
    </>
  );
};

export default Home;
