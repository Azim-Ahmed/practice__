import React from "react";
import { Link } from "react-router-dom";
const LandingProduct = () => {
  return (
    <div className="flex py-14 pt-20 bg-white flex-col justify-center">
      <div className="text-center mb-2">
        <span className="block leading-tight font-semibold text-4xl text-[#091e42] mb-3">
          It's not just work. That's how to work together.
        </span>
        <span className="block text-xl mb-3 text-[#091e42]">
          Get started with Pilo projects, lists and tasks. Customize and expand
          with more features as your teamwork grows. <br/> Manage projects, organize
          tasks, and build morale teamwork—all in one place.
        </span>
        <Link to="/register">
          <button className="bg-indigo-500 text-white px-5 py-2 hover:font-semibold rounded-md hover:bg-white hover:text-indigo-500 hover:border-2 hover:border-indigo-500">
            Start working
          </button>
        </Link>
      </div>
      <div className="flex justify-center">
        <img
          className="w-[1000px]"
          src="/images/landingpage/board.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default LandingProduct;
