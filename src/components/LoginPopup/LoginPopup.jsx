import React, { useState } from 'react'
import './loginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login")
  return (

    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="cross-icon" />
        </div>
        <div className="login-popup-inputs">
          {currState==="Login"? <></> : <input type="text" placeholder='Your Name' required/>}
          <input type="email" placeholder='Your Email' required/>
          <input type="password" placeholder='Password' required/>
        </div>
        <button id='btn' className='py-[10px] bg-[tomato] rounded text-white font-[500] cursor-pointer w-full'>{currState==="Sign Up"? "create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState==="Login"? <p className='para'>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p> : <p className='para'>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>}
      </form>
    </div>
  )
}

export default LoginPopup