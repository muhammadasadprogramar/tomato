import React, { useContext } from 'react'
import './placeOrder.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext) 

  const handleSubmit = (e) => { 
    e.preventDefault();
       if (getTotalCartAmount() === 0) {
        alert("Item not available ❌ please order now");
       } else {
        alert("Order has been Submited successfully ✅")
       }
  }
  return (
    <form onSubmit={handleSubmit} className="place-order grid grid-cols-1 md:grid-cols-2 mt-36 gap-y-7 gap-x-0 md:gap-x-10 md:gap-y-0">
      <div className="place-order-left">
        <p className="title text-2xl font-bold mb-8">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phonne' />
      </div>

      <div className="place-order-right">
      <div className="cart-total">
          <h2 className="text-2xl font-bold mb-5">Cart Totals</h2>
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
          <button className="px-6 sm:px-8 rounded mt-6 py-[10px] text-[13px] sm:text-[16px] bg-[tomato] text-white font-[500]">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder