import axios from "axios";

export const placeOrder = async ({ values, cbSuccess, cbFailure }) => {
  try {
    const { data, status } = await axios.post(
      "http://localhost:4000/order/place-order",
      {
        ...values,
      }
    );

    status == 201
      ? cbSuccess({
          status: 201,
          message: "order placed successfully",
          data: data.order_no,
        })
      : cbFailure({ status: 400, data: data.error });
  } catch (error) {
    cbFailure({ status: 400, message: error.message });
  }
};
