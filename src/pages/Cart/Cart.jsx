import React, { useContext } from "react";
import "./cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItem, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="cart-image" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>${item.price * cartItem[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cursor-pointer text-xl">x</p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom grid grid-cols-1 md:grid-cols-2 gap-y-10">
        <div className="cart-total">
          <h2 className="text-2xl font-bold mb-4">Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr id="hr"/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr id="hr"/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button className="px-6 sm:px-8 rounded mt-6 py-[10px] text-[13px] sm:text-[16px] bg-[tomato] text-white font-[500]" onClick={() => navigate("/order")}>PROCEED TO CHECKOUT</button>
        </div>

        <div className="cart-promocode flex flex-col items-center md:items-end">
          <div>
            <p className="text-[#555] text-center sm:text-start">If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input mt-8 rounded overflow-hidden flex items-center justify-between bg-[#eaeaea]">
              <input className="w-full py-[10px] ps-4 bg-slate-300 outline-none" type="text" placeholder="promo code"/>
              <button className="px-6 bg-[tomato] py-[10px] text-white">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
