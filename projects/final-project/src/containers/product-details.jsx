import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
const ProductDetail = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#000");
  const navigate = useNavigate();

  const getPostDetail = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${params.id}`
      );
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.log("🚀 ~ file: products.jsx:13 ~ Product ~ error", error);
    }
    setLoading(false);
  };
  useEffect(() => {
    getPostDetail();
  }, []);

  return (
    <div className="container">
      <div className="row align-items-center vh-100">
        <div className="col-md-12">
          {!loading ? (
            <>
              <img src={post?.image} width="100" />
              <h3 className="mt-5">{post?.title}</h3>
              <p>{post?.description}</p>
            </>
          ) : (
            <ClipLoader
              color={color}
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
