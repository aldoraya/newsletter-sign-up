import React from "react";
import "../index.css";
import Form from "./Form";

const CardUpdate = () => {
  return (
   <div className="grid h-screen w-full place-items-center bg-white sm:bg-transparent">
    <div className="block sm:hidden w-full">
          <img
            className="h-60 w-full object-cover rounded-b-xl relative bottom-4"
            src="images/illustration-sign-up-mobile.svg"
            alt="illustration"
          />
    </div>
     <div className="w-full sm:w-[60%] h-none sm:h-auto sm:bg-white sm:rounded-3xl p-2 sm:p-4 relative bottom-4">
      <div className="block sm:flex">
        <div className="sm:py-12 px-4 sm:px-12 sm:pr-16 w-full">
          <p className="text-3xl sm:text-5xl font-bold text-dark-slate-grey">
            Stay updated!
          </p>
          <div className="block pt-6 text-sm sm:text-base">
            <p>Join 60.000+ product managers receiving monthly updates on:</p>
          </div>
          <div className="block pt-4 text-base">
            <nav className="flex">
              <img
                className="relative bottom-1 sm:bottom-0 w-auto h-auto pr-4"
                src="images/icon-list.svg"
                alt=""
              />
              <p className="text-sm sm:text-base">product discovery and building what matters</p>
            </nav>
          </div>
          <div className="block pt-2 text-base">
            <nav className="flex">
              <img
                className="w-auto h-auto pr-4"
                src="images/icon-list.svg"
                alt=""
              />
              <p className="text-sm sm:text-base">measuring to ensure updates are a success</p>
            </nav>
          </div>
          <div className="block pt-2 text-base">
            <nav className="flex">
              <img
                className="w-auto h-auto pr-4"
                src="images/icon-list.svg"
                alt=""
              />
              <p className="text-sm sm:text-base">And much more!</p>
            </nav>
          </div>
          <Form />
        </div>

        <div className="hidden sm:flex justify-end w-[70%]">
          <img
            className="w-[355px] absolute"
            src="images/illustration-sign-up-desktop.svg"
            alt="illustration"
          />
        </div>
      </div>
    </div>
   </div>
  );
};

export default CardUpdate;
