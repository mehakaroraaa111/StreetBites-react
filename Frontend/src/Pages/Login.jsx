import React from "react";
import { Link } from "react-router-dom";
import Signup from "./Signup";
function Login(){
    return(
       <>
    <div className="flex justify-center item-center">
    <form className="main h-150 w-200 border-none p-10 m-10 shadow-2xl">
      <h1 className="heading  text-orange-800 text-center text-4xl font-bold "> Login  your account</h1>
<div className="container  ">
 
  <div className="second-box border-none mt-10 p-4 rounded-2xl bg-slate-100 shadow-sm">
<input type="text" placeholder="Enter Your email"/>
  </div>
 
  
  <div className="Fourth-box border-none mt-10 p-4 rounded-2xl bg-slate-100 shadow-sm">
    <input type="password" placeholder="Enter your Password"/>

  </div>
  <button className="submit-btn bg-orange-400 border-none mt-10 p-3 mx-70 rounded-2xl w-30 font-bold text-white shadow-md hover:bg-orange-600 ">Submit</button>

<div className="last-heading text-orange-500 flex justify-start gap-3">
<p>User not Existing? </p>
<Link to="/signup">Sign-up</Link>
</div>



</div>





    </form>
    </div>
    </>
    )
}
export default Login;