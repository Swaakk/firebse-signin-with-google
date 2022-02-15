import React from "react";
import google from "../assests/google.png";

const Signin = () => {
  return (
      <div>
          <h1 className="text-black-500 text-center  relative top-32 text-lg font-bold text-gray-600">Sign in to start chat!!</h1>
    <div className="flex h-screen justify-center">
      <button className="bg-white  rounded-2xl m-40 h-48 md:h-72 md:w-96 h-72 ">
        <img className="duration-200 p-5 cursor-pointer hover:scale-125 md:hover:scale-110"src={google}/>
        <span className="">Sign in with Google</span>
      </button>
    </div>
    </div>
  );
};

export default Signin;
