import React from "react";
import { Link } from "react-router-dom";
const LandingHeader = () => {
  return (
    <div>
      <div className="relative bg-white">
        <div className="w-full mx-auto sm:px-6">
          <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <img
                  className="h-full w-auto sm:h-10"
                  src="/images/landingpage/logo.svg"
                  alt=""
                />
              </a>
            </div>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link to="/introduce">
                <a
                  href="/"
                  className="mr-8 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  About Pilo
                </a>
              </Link>
              <Link to="/pricing">
                <a
                  href="/"
                  className="mr-8 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Pricing
                </a>
              </Link>
              <Link to="/login">
                <a
                  href="/"
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Sign in
                </a>
              </Link>
              <Link to="/register">
                <a
                  href="/"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingHeader;
