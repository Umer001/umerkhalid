import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
const CarDetail = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#000");
  const navigate = useNavigate();

  const getPostDetail = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:4000/cars/${params.id}`);
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
              <h3 className="mt-5">{post?.color}</h3>
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

export default CarDetail;
