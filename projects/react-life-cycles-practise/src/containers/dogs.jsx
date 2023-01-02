import React, { useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const Dogs = () => {
  const getDog = async () => {
    const { data } = await axios.get("https://dog.ceo/api/breeds/image/random");

    return data;
  };

  useEffect(() => {
    getDog();
  }, []);

  const { status, data, error, isFetching, isLoading, refetch } = useQuery(
    "Dogs",
    getDog,
    {
      enabled: true, //agr false karty hai to 1st time func khud nai chaly ga
    }
  );

  return (
    <div className="container">
      {isLoading || isFetching ? (
        <p>Loading...</p>
      ) : (
        <img src={data?.message} width={200} />
      )}
      <br />
      <button className="btn btn-success mt-2" onClick={refetch}>
        Next
      </button>
    </div>
  );
};

export default Dogs;
