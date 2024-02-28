import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delCart } from "../redux/action/index";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.hanldeCart);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delCart(item));
  };

  const cartItems = (cartItem) => {
    return (
      <div className=" my-5 py-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container cart ">
          <button
            onClick={() => handleClose(cartItem)}
            className="btn-close float-end"
            aria-label="Close"
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                height="200px"
                width="150px"
                className="image-fluid"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead display-6 fw-bold">${cartItem.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4 my-5">
          <div className="row">
            <h3>Your Cart is Empty.</h3>
          </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return(
        <div className="container cart">
            <div className="row">
                <NavLink to='/checkout' className="btn btn-outline-dark mb-5 w-50 mx-auto">Proceed to Checkout</NavLink>
            </div>
        </div>
    )
  }

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  );
};

export default Cart;
