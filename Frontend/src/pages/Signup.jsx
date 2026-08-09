import React from "react";
import Login from "./Login";
import { Link } from "react-router-dom";
function Signup(){
    return(
       <>
    <div className="flex justify-center item-center">
    <form className="main h-150 w-200 border-none p-10 m-10 shadow-2xl">
      <h1 className="heading  text-orange-800 text-center text-4xl font-bold ">Creating Your Account?</h1>
<div className="container  ">
  <div className="first-box border-none mt-10 p-4 rounded-2xl bg-slate-100 shadow-sm">
<input type="text"  placeholder="Enter Your Name" />
  </div>
  <div className="second-box border-none mt-10 p-4 rounded-2xl bg-slate-100 shadow-sm">
<input type="text" placeholder="Enter Your email"/>
  </div>
  <div className="third-box border-none mt-10 p-4 rounded-2xl bg-slate-100 shadow-sm">
    <input type="tel" placeholder="Enter your phone-number"/>
  </div>
  <div className="Fourth-box border-none mt-10 p-4 rounded-2xl bg-slate-100 shadow-sm">
    <input type="text" placeholder="Enter your addresss"/>

  </div>
  <button className="submit-btn bg-orange-400 border-none mt-10 p-3 mx-70 rounded-2xl w-30 font-bold text-white shadow-md hover:bg-orange-600 ">Submit</button>
<div className="last-heading text-orange-700 flex justify-start gap-3">
<p>Already have an Account?</p>
<Link to="/login">Login here </Link>
</div>




</div>





    </form>
    </div>
    </>
    )
}
export default Signup;