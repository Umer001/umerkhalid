import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const getCars = async () => {
  const { data } = await axios.get("http://localhost:4000/Cars");

  return data;
};

const Cars = () => {
  const { status, data, error, isFetching, isLoading } = useQuery(
    "Cars",
    getCars
  );

  return (
    <div>
      {isLoading || isFetching
        ? "<p>Loading...</p>"
        : data?.map((item) => {
            return (
              <>
                <Link key={item.id} to={`/car/${item.name}`}>
                  {item.model}
                </Link>
                <br />
              </>
            );
          })}
    </div>
  );
};

export default Cars;
