import React from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { loginUser } from "redux/reducers/auth/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import ThreeDotsWave from "components/loading/ThreeDotsWave";
import MetaTitle from "utils/MetaTitle";
const schema = yup.object().shape({
  email: yup
    .string()
    .required("Vui lòng nhập email")
    .max(40, "Email tối đa 40 ký tự")
    .email("Thông tin bạn nhập chưa chính xác"),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Thông tin bạn nhập chưa chính xác"
    ),
});
const Login = () => {
  const dispatch = useDispatch();
  const successLogin = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const onLoginSubmit = async (values) => {
    try {
      const action = loginUser(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      toast.success("Đăng nhập thành công. Bạn vui lòng đợi trong giây lát!", {
        position: "top-right",
        icon: "👏",
      });

      setTimeout(() => successLogin("/dashboard"), 2500);
      await sleep(2500);
      window.location.reload();
    } catch (error) {
      toast.error("Đăng nhập thất bại, tài khoản không tồn tại!", {
        position: "top-right",
      });
    }
  };
  return (
    <>
      <MetaTitle title="Đăng nhập - Pilo" />
      <div className="h-screen bg-white flex items-start pt-20 justify-center  px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Toaster
            toastOptions={{
              success: {
                style: {
                  background: "#2ecc71",
                  color: "white",
                },
              },
              error: {
                style: {
                  background: "#e74c3c",
                  color: "white",
                },
              },
            }}
          />
          <div>
            <Link to="/">
              <img
                className="mx-auto h-12 w-[200px] cursor-pointer"
                src="/images/landingpage/logo.svg"
                alt="Workflow"
              />
            </Link>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Log in to Pilo
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            onSubmit={handleSubmit(onLoginSubmit)}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  autoComplete="email"
                  {...register("email")}
                  className="appearance-none rounded-none relative block w-full px-4 py-6 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xl"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  {...register("password")}
                  autoComplete="current-password"
                  className="appearance-none rounded-none relative block w-full px-4 py-6 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xl"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link to="/verifyEmail">
                  <span className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex justify-center mx-auto">
              {isSubmitting && <ThreeDotsWave />}
            </div>
            {errors.password && (
              <div className="flex justify-center mx-auto">
                <span className="text-base text-red-500 font-semibold">
                  {errors.password.message}
                </span>
              </div>
            )}
            {errors.email && (
              <div className="flex justify-center mx-auto">
                <span className="text-base text-red-500 font-semibold">
                  {errors.email.message}
                </span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="group disabled:opacity-75 disabled:bg-gray-400 relative w-full flex justify-center py-4 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
            <div className="text-center">
              <span className="text-black">You don't have account?</span>
              <Link to="/register" className="text-red-500 ml-1 font-semibold">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
