import React, { Fragment, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { LogoutIcon } from "@heroicons/react/outline";
import { KeyIcon, UserCircleIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/reducers/auth/userSlice";
import useUserDetail from "hooks/useUserDetail";

import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
function ProfileModal() {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.current);
  const userId = loggedInUser.id;
  const handleLogoutClick = () => {
    const action = logout();
    dispatch(action);
  };
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      const decodedToken = jwt_decode(token);
      if (decodedToken.exp < Date.now() / 1000) {
        handleLogoutClick();
      }
    }
  });
  const { user, loading } = useUserDetail(userId);
  if (loading) {
    return "";
  }
  return (
    <Menu as="div" className="ml-3 relative">
      <div>
        <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-5 w-96 rounded-md shadow-lg  bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="">
            <div className="flex flex-col py-6 justify-center items-center">
              <img
                src="/images/img_avatar.png"
                className="w-12 h-12 mb-2 rounded-3xl"
                alt=""
              />
              <span className="text-black font-bold text-md">
                {user.data.username}
              </span>
              <span className="text-red-500 text-md font-medium">
                ({user.data.position})
              </span>
              <span className="text-black  text-md">{user.data.email}</span>
            </div>
            <div className="px-2">
              <div className="text-black rounded-md px-3 py-2 text-center border-2 border-gray-300">
                CONG TY TNHH LONG AN
              </div>
            </div>
            <div className="flex flex-col justify-center items-start px-3 py-4">
              <div className="flex flex-row items-center py-3 px-3 hover:bg-gray-200 hover:rounded-md w-full">
                <Link to="/forgetPassword">
                  <div className="flex flex-row">
                    <KeyIcon className="w-5 h-5 text-gray-500" />
                    <span className="text-black ml-2 text-sm">
                     Change password
                    </span>
                  </div>
                </Link>
              </div>

              <div className="flex flex-row items-center py-3 px-3 hover:bg-gray-200 hover:rounded-md w-full">
                <UserCircleIcon className="w-5 h-5 text-gray-500" />
                <span className="text-black ml-2 text-sm">
                  Account settings
                </span>
              </div>
            </div>
            <div className="cursor-pointer border-t-2 border-gray-200">
              <div className="px-3 py-3 hover:bg-gray-300 hover:rounded-b-md flex flex-row items-center justify-center">
                <LogoutIcon className="w-5 h-5 text-gray-500" />
                <span
                  className="text-black ml-2 text-sm"
                  onClick={handleLogoutClick}
                >
                  Log out
                </span>
              </div>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default ProfileModal;
