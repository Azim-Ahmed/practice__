import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/solid";
function Introduce() {
  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:fixed lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
            <Link to="/">
              <div className="mb-2 flex flex-row items-center fixed right-2 top-2">
                <ArrowLeftIcon className="w-3 h-3 mr-1" />
                <span className="text-sm">Back to home</span>
              </div>
            </Link>
            <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
              Overview
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Pilo - Project Management System
            </h3>
            <p className="mt-8 text-lg text-gray-500">
              Connecting anytime, anywhere is no longer only popular in leisure
              and relaxation activities, but even in work, this trend is also
              becoming more and more popular. This is one of the factors
              promoting the development of online software applications. As one
              of the pioneers in the trend of Cloud Computing, Pilo does not
              stop at providing online software but also integrates many
              business administration tasks in the same software system, helping
              businesses manage comprehensive business with just one account at
              Pilo
            </p>
            <div className="mt-5 text-lg prose prose-indigo text-gray-500">
              <span className="text-2xl mt-4 mb-2 block font-bold text-black">
                Comprehensive enterprise management
              </span>
              <p>
                Pilo is a unified business management solution, integrated from
                many different management systems such as: Accounting, Sales,
                Human Resources. In addition, Pilo also supports many other
                management tasks in the enterprise such as: Communication,
                Knowledge, Initiatives, Assets, Quality... as well as supporting
                the work of the administrative department. Users only need to
                use a single account to access and use all the above systems,
                helping to improve work efficiency, optimize and reduce costs
                for businesses. Pilo is suitable for all businesses from small
                to large of all types and fields.
              </p>
              <span className="text-2xl mt-4 block font-bold text-black">
                Buy once, get it all!
              </span>
              <p className="text-lg">
                As a system that integrates many business software, when
                businesses choose to buy accounting software, they will be added
                other management software such as: Sales Administration, Human
                Resource Management, Communication Management, Administration
                Initiative, Knowledge Management, Administrative Management,
                Quality Management... All of these software are fully featured,
                solving all the operations of an enterprise. In addition to the
                main operations such as Accounting, Human Resources, Sales, Pilo
                also integrates Knowledge management software (Support for
                employee training and self-training), Initiative Management (For
                employees). allows all employees to submit initiatives to
                promote productivity and an initiative management system from
                proposal to completion, applied in practice) or Communication
                Management (Creates a friendly, motivating working environment)
                internal understanding, encouraging work spirit, etc.). These
                are really useful and necessary tools to motivate the team
                during the economic crisis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
