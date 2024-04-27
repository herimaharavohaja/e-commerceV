import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const carts = JSON.parse(localStorage.getItem("cart")) || [];

  useEffect(() => {
    const total = carts.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotal(total);
  }, [carts]);

  const handleInc = (id) => {
    const updateCart = carts.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updateCart));
    navigate("/cart");
  };

  const handleDesc = (id) => {
    const updateCart = carts.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity - 1;
        const quantity = newQuantity < 1 ? 1 : newQuantity;
        return {
          ...item,
          quantity: quantity,
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updateCart));
    navigate("/cart");
  };
  
  const removeProduct = (id) => {
    const updateCart = carts.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updateCart));
    navigate("/cart");
  };

  if (!carts.length) return <div className="text-center  text-2xl font-medium title-font text-gray-900">Cart is empty</div>;
  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping cart</h1>
            <h2 className="font-semibold text-2xl">{carts.length} Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Products Details
            </h3>
            <h3 className="font-semibold text-center text-xs uppercase w-1/5 text-center">
              Quantity
            </h3>
            <h3 className="font-semibold text-center text-xs uppercase w-1/5 text-center">
              Price
            </h3>
            <h3 className="font-semibold text-center text-xs uppercase w-1/5 text-center">
              Total
            </h3>
          </div>
          {carts.map((cart) => (
            <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
              <div className="flex w-2/5">
                <div className="w-20">
                  <img
                    className="h-24"
                    src={cart.image}
                    alt={cart.title}
                  />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span className="font-bold text-sm">{cart.title}</span>
                  <span className="text-red-500 text-xs capitalize">{cart.category}</span>
                  <div
                    href="#"
                    className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
                    onClick={() => removeProduct(cart?.id)}
                  >
                    Remove
                  </div>
                </div>
              </div>
              <div className="flex justify-center w-1/5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => handleDesc(cart?.id)}
                  className="fill-current text-gray-600 w-3 cursor-pointer"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 15h14M12 9l7 7-7 7" />
                </svg>
                <input
                  className="mx-2 border text-center w-8 "
                  type="text"
                  value={cart.quantity}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => handleInc(cart?.id)}
                  className="fill-current text-gray-600 w-3 cursor-pointer"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 15h14M12 9l7 7-7 7" />
                </svg>
              </div>
              <span className="text-center w-1/5 font-semibold text-sm">
                {cart.price}
              </span>
              <span className="text-center w-1/5 font-semibold text-sm">
                {cart.price * cart.quantity}
              </span>
            </div>
          ))}
          <Link
            to={"/products"}
            className="flex font-semibold text-indigo-600 text-sm mt-10"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-gray-600 w-3"
              viewBox="0 0 24 24"
            >
              <path d="M5 15h14M12 9l7 7-7 7" />
            </svg>
            Continue Shopping
          </Link>
        </div>
        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase ">Items {carts.length}</span>
            <span className="font-semibold text-sm price">{total.toFixed(2)}$</span>
          </div>
          <div>
            <label
              className="font-medium inline-block mb-3 text-sm uppercase"
              htmlFor=""
            >
              Shipping
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option value="">Standard shipping -$10.00</option>
            </select>
          </div>
          <div className="py-10">
            <label
              htmlFor="promo"
              className="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Promo code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="p-2 text-sm w-full"
            />
          </div>
          <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
            Apply
          </button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total coast</span>
              {total && <span>{(total + 10).toFixed(2)}$</span>}
            </div>
            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
