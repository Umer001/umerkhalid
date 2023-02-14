import axios from "axios";
export const getProducts = async ({ values, cbSuccess, cbFailure }) => {
  try {
    const { status, data } = await axios.get("http://localhost:4000/products");

    status == 201
      ? cbSuccess({
          status: 201,
          message: "products found successfully",
          data: data,
        })
      : cbFailure({ status: 400, data: data.error });
  } catch (error) {
    cbFailure({ status: 400, message: error.message });
  }
};
export const getProductsByCat = async ({ id, cbSuccess, cbFailure }) => {
  try {
    const { status, data } = await axios.get(
      `http://localhost:4000/products/category_id/${id}`
    );

    status == 201
      ? cbSuccess({
          status: 201,
          message: "products found successfully",
          data: data,
        })
      : cbFailure({ status: 400, data: data.error });
  } catch (error) {
    cbFailure({ status: 400, message: error.message });
  }
};
