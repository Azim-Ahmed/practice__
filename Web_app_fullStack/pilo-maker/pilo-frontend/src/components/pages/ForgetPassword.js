import React, { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
const schema = yup.object().shape({
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Thông tin bạn nhập chưa chính xác"
    ),
  repassword: yup
    .string()
    .required("Vui lòng nhập lại mật khẩu")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Mật khẩu chưa khớp"
    ),
});
function ForgetPassword() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });
  const passwordRef = useRef({});
  passwordRef.current = watch("password", "");
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
      <div className="w-[600px] mx-auto">
        <form
          className="mt-8 space-y-6"
          // onSubmit={handleSubmit(onLoginSubmit)}
        >
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="password" className="sr-only">
                Mật khẩu
              </label>
              <input
                type="password"
                {...register("password")}
                autoComplete="current-password"
                className="appearance-none relative block w-full px-4 py-6 border border-gray-300 placeholder-gray-500 text-gray- rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xl"
                placeholder="Mật khẩu mới"
              />
            </div>
            <div>
              <label htmlFor="repassword" className="sr-only">
                Nhập lại mật khẩu
              </label>
              <input
                type="password"
                {...register("repassword", {
                  validate: (value) =>
                    value === passwordRef.current ||
                    "The passwords do not match",
                })}
                autoComplete="current-password"
                className="appearance-none rounded-none relative block w-full px-4 py-6 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xl"
                placeholder="Nhập lại mật khẩu mới"
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

export default ForgetPassword;
