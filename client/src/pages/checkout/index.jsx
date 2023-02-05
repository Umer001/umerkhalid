import React, { useState } from "react";
import {
  Label,
  TextInput,
  Checkbox,
  Button,
  Spinner,
  Textarea,
} from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MiniitemCard, EmptyCart } from "../../components";
import { checkoutValidationSchema } from "../../utils/formik-validations";
import { Formik } from "formik";
import { placeOrder } from "../../services/http-services/order";
import toast from "react-hot-toast";
import PinLocation from "../../components/pin-location";
import { slice } from "../../store/slices/cart";
import Thankyou from "../thankyou";
const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [thankyou, setThankyou] = useState(false);
  const [orderno, setOrderno] = useState("");

  const orderData = useSelector((state) => {
    return state.cart;
  });
  const { totalQuantity, items, totalAmount } = useSelector((state) => {
    return state.cart;
  });
  const { currentUser } = useSelector((state) => {
    return state.auth;
  });
  const handleSubmit = async (values, setSubmitting) => {
    console.log("🚀 ~ file: index.jsx:29 ~ handleSubmit ~ values", values);
    values.cart = orderData;
    values.cus_id = currentUser.user_id;
    setSubmitting(false);
    placeOrder({
      values,
      cbSuccess: ({ status, message, data }) => {
        setSubmitting(false);
        toast.success(message);
        console.log(status, message);
        dispatch(slice.actions.emptyCart());
        setThankyou(true);
        setOrderno(data);
      },
      cbFailure: ({ status, message }) => {
        setSubmitting(false);
        toast.error(message);
        console.log(status, message);
      },
    });
  };
  return (
    <div>
      {!thankyou ? (
        <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 ">
          <span className="text-2xl font-bold text-gray-800">Checkout</span>
          {totalQuantity > 0 ? (
            <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
              <div className="relative">
                <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                  <li className="flex items-center space-x-3 text-left sm:space-x-4">
                    <a
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </a>
                    <span className="font-semibold text-gray-900">Shop</span>
                  </li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <li className="flex items-center space-x-3 text-left sm:space-x-4">
                    <a
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-red-700 text-xs   font-semibold text-white ring ring-red-700 ring-offset-2"
                      href="#"
                    >
                      2
                    </a>
                    <span className="font-semibold text-gray-900">
                      Checkout
                    </span>
                  </li>
                  <li className="flex items-center space-x-3 text-left sm:space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span className="font-semibold text-gray-900">
                      Order Placed
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
      {thankyou ? (
        <Thankyou orderno={orderno} />
      ) : totalQuantity < 1 ? (
        <>
          <EmptyCart back={true} />
        </>
      ) : (
        <Formik
          initialValues={{
            special_instructions: "",
            address: "",
            lat: "",
            lng: "",
          }}
          validationSchema={checkoutValidationSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values, setSubmitting);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue,
            /* and other goodies */
          }) => (
            <form
              className="grid sm:px-10 lg:grid-cols-3 my-3 bg-white"
              onSubmit={handleSubmit}
            >
              <div className="px-4 sm:px-0 py-8 lg:col-span-2">
                <p className="text-xl font-medium">Payment Details</p>

                <div className="mt-6">
                  <div className="mb-2 block">
                    <Label htmlFor="address" value="Your address" />
                  </div>
                  <TextInput
                    color={errors.address ? "failure" : ""}
                    id="address"
                    name="address"
                    placeholder="Your address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                  />
                  <p className="text-red-500 text-xs">
                    {errors.address && touched.address && errors.address}
                  </p>
                </div>

                <PinLocation
                  handleChange={(e) => setFieldValue("lat", e.targer.value)}
                />
                <div className="mt-4">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="special_instructions"
                      value="Any Special Instrutions"
                    />
                  </div>
                  <Textarea
                    id="special_instructions"
                    name="special_instructions"
                    placeholder="Type here.."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.special_instructions}
                    rows={4}
                  />
                  <p className="text-red-500 text-xs">
                    {errors.special_instructions &&
                      touched.special_instructions &&
                      errors.special_instructions}
                  </p>
                </div>
              </div>
              <div className="mt-10  px-4 pt-8 lg:mt-0   ">
                <p className="text-xl font-medium">Order Summary</p>

                <div className="mt-8 space-y-3 rounded-lg overflow-y-auto border bg-white px-2 py-4 sm:px-6 max-h-[270px] checkout-cart">
                  {items.map((item) => {
                    return (
                      <MiniitemCard key={item.id} item={item} actions={false} />
                    );
                  })}
                </div>
                <div className>
                  {/* Total */}
                  <div className="mt-6   border-b py-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">
                        Subtotal
                      </p>
                      <p className="font-semibold text-gray-900">
                        Rs. {totalAmount}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">
                        Delivery Charges
                      </p>
                      <p className="font-semibold text-gray-900">0.00</p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Total</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      Rs. {totalAmount}
                    </p>
                  </div>
                </div>

                <div className="mt-2">
                  <Button
                    color="failure"
                    className=" w-full"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    PLACE ORDER
                    {isSubmitting ? (
                      <div className="ml-2">
                        <Spinner size="sm" light={true} color="failure" />
                      </div>
                    ) : (
                      ""
                    )}
                  </Button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default Checkout;
