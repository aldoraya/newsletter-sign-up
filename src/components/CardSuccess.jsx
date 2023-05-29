import React from "react";
import "../index.css";
import { useNavigate, useLocation } from "react-router-dom";

const CardSuccess = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email");

  const handleButtonClick = () => {
    // Navigate to a specific route
    navigate('/');
  };

  return (
   <div className="grid h-screen w-full place-items-center bg-white sm:bg-transparent">
     <div className="w-full sm:w-[35%] h-none sm:h-auto sm:bg-white sm:rounded-3xl sm:shadow-xl p-6 sm:p-16">
     <img className="w-14 h-14" src="images/icon-success.svg" alt="" />
     <p className="text-3xl sm:text-5xl font-bold pt-4 sm:pt-6">Thanks for subscribing!</p>
     <p className="pt-4 sm:pt-8 text-sm sm:text-base">
      A confirmation email has been sent to <b>{email}</b>, please open it and click
      the button inside to confirm your subscribtion
     </p>
     <button
          type="submit"
          onClick={handleButtonClick}
          className="fixed sm:relative sm:bottom-0 bottom-6 sm:mt-8 text-white bg-dark-slate-grey rounded-md w-[88%] sm:w-full py-3 sm:py-4 font-bold hover:bg-gradient-to-r hover:to-orange hover:from-primary ease-out duration-500 hover:duration-500 active:text-black"
        >
          Dismiss message
      </button>
    </div>
   </div>
  );
};

export default CardSuccess;
