import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
import axios from "axios";
function Posts({ setPostId }) {
  const [progress, setProgress] = useState(50);

  const [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#000");
  function usePosts() {
    // return useQuery("posts", async () => {
    //   const response = await fetch("https://fakestoreapi.com/products");
    //   const data = await response.json();
    //   return data;
    // });

    return useQuery("posts", async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");

      return data;
    });
  }

  const getPostData = (id) => {
    navigate(`/product/${id}`);
  };
  const { status, data, error, isFetching } = usePosts();
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="row">
          {status === "loading" ? (
            <>
              <LoadingBar
                color="#20c997"
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
              />
            </>
          ) : status === "error" ? (
            <span>Error: {error.message}</span>
          ) : (
            <>
              {data?.map((post) => (
                <div
                  className="col-md-12 col-lg-4 mb-4 mb-lg-0 "
                  key={post.id}
                  style={{ cursor: "pointer" }}
                  onClick={() => getPostData(post.id)}
                >
                  <div className="card mt-2">
                    <img
                      style={{ height: "300px" }}
                      src={post.image}
                      className="card-img-top"
                      alt="Laptop"
                    />
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <p className="small">
                          <a href="#!" className="text-muted">
                            {post.category}
                          </a>
                        </p>
                        <p className="small text-danger">
                          <s>{post.price}</s>
                        </p>
                      </div>

                      <div className="d-flex justify-content-between mb-3">
                        <h5
                          className="mb-0"
                          style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: "200px",
                          }}
                        >
                          {post.title}
                        </h5>
                        <h5 className="text-dark mb-0">{post.price}</h5>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <p className="text-muted mb-0">
                          Available: <span className="fw-bold">6</span>
                        </p>
                        <div className="ms-auto text-warning">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div>{isFetching ? "Background Updating..." : " "}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default Posts;
