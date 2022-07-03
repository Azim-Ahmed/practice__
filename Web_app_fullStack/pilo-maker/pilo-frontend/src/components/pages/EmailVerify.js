import React from "react";
import { Link } from "react-router-dom";

function EmailVerify() {
  return (
    <div className="w-full h-screen bg-white">
      <div className="pt-24">
        <Link to="/">
          <img
            src="/images/landingpage/logo.svg"
            className="mx-auto h-12 w-[200px]"
            alt=""
          />
        </Link>
      </div>
      <div className="w-[400px] mx-auto">
        <form
          className="mt-8 space-y-6"
          // onSubmit={handleSubmit(onLoginSubmit)}
        >
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                // {...register("password")}
                autoComplete="email"
                className="appearance-none relative block w-full px-4 py-6 border border-gray-300 placeholder-gray-500 text-gray- rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xl"
                placeholder="Nhập email của bạn"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="btn btn-success text-white">Xác nhận</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmailVerify;
