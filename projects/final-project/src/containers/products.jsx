import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import LoadingBar from "react-top-loading-bar";

const Product = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#000");
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  const getPostData = (id) => {
    navigate(`/product/${id}`);
  };

  const getPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.log("🚀 ~ file: products.jsx:13 ~ Product ~ error", error);
    }
    setLoading(false);
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container">
      <ul>
        {!loading ? (
          post.map((item) => (
            <li>
              <p
                style={{ cursor: "pointer" }}
                key={item.id}
                onClick={() => getPostData(item.id)}
              >
                {item.title}
              </p>
            </li>
          ))
        ) : (
          <>
            <ClipLoader
              color={color}
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </>
        )}
      </ul>
    </div>
  );
};

export default Product;
