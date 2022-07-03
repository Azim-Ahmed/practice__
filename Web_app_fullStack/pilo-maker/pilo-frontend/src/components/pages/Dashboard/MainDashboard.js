import React from "react";
import Clock from "react-live-clock";
import useWindowSize from "../../../hooks/useWindowSize";

function MainDashboard(props) {
  const [width, height] = useWindowSize();
  const mainHeight = height - 64;
  const { user, loading } = props;
  if (loading) {
    return "";
  }
  return (
    <main
      className="bg-white  w-full px-5 "
      style={{ height: `${mainHeight}px` }}
    >
      <div className="fixed bottom-6 ">
        <span className="text-black font-semibold">
          Xin chào {user.username}
        </span>
        <div className="text-red-500 text-5xl mt-3 font-bold">
          <Clock
            format={"HH:mm:ss"}
            ticking={true}
            timezone={"Asia/Ho_Chi_Minh"}
          />
        </div>
        <div className="w-64 mt-3">
          <span className="text-black">
            "Great achievement is usually born of great sacrifice, and is never
            the result of selfishness"
          </span>
        </div>
        {/* <div className="mt-3">
          <button className="px-3 py-2 bg-violet-500 text-white rounded-md">
            Bật chế độ tập trung
          </button>
        </div> */}
      </div>
      <div className="fixed bg-[#192a56] px-12 py-10 rounded-xl top-20  right-8 flex flex-col">
        <span className="text-white font-medium w-64  mb-3">
          Bạn còn 5 công việc chưa hoàn thành ở dự án 1
        </span>
        <button className="btn bg-red-500 border-none hover:bg-red-600 text-white">
          Giải quyết ngay
        </button>
      </div>
    </main>
  );
}

export default MainDashboard;
