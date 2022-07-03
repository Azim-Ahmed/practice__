import React from "react";
const LandingHero = () => {
  return (
    <div className="pt-4 bg-white">
      <div className="grid grid-cols-5 gap-4 flex justify-center items-center">
        <div className="space-y-5 px-36 col-span-3">
          <span className="text-5xl leading-tight font-semibold text-[#091e42]">
            Pilo helps teams move work forward.
          </span>
          <br />
          <span className="block w-2/3 text-xl text-gray-500">
            Collaborate, manage projects, and reach new heights of productivity.
            From tall buildings to home offices, the way your team works is
            unique—complete it all with Pilo.
          </span>
          {/* <div className="flex">
            <input
              type="email"
              placeholder="Email"
              className="mt-1 pl-3 border-2 border-gray-300 focus:border-indigo-600 block w-1/2 h-10 mr-3 h-10  sm:text-sm   rounded-md"
            />
            <button className="px-5 py-1 rounded-md bg-indigo-600 text-white">
              
            </button>
          </div> */}
        </div>
        <div className="col-span-2">
          <img
            className="w-[500px]"
            src="/images/landingpage/hero.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
