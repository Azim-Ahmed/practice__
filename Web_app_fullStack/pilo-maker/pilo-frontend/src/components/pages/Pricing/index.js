import React from "react";
import { CheckIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import MetaTitle from "utils/MetaTitle";
import { ArrowLeftIcon } from "@heroicons/react/solid";
const tiers = [
  {
    name: "Startup",
    href: "#",
    priceMonthly: "50",
    description: "1-10 members",
    includedFeatures: [
      "Potenti felis, in cras at at ligula nunc. ",
      "Orci neque eget pellentesque.",
      "Donec mauris sit in eu tincidunt etiam.",
      "Faucibus volutpat magna.",
    ],
  },
  {
    name: "Small Business",
    href: "#",
    priceMonthly: "189",
    description: "10-50 members",
    includedFeatures: [
      "Potenti felis, in cras at at ligula nunc. ",
      "Orci neque eget pellentesque.",
      "Donec mauris sit in eu tincidunt etiam.",
      "Faucibus volutpat magna.",
      "Id sed tellus in varius quisque.",
      "Risus egestas faucibus.",
      "Risus cursus ullamcorper.",
    ],
  },
  {
    name: "Medium Enterprises",
    href: "#",
    priceMonthly: "229",
    description: "50-100 members",
    includedFeatures: [
      "Potenti felis, in cras at at ligula nunc. ",
      "Orci neque eget pellentesque.",
      "Donec mauris sit in eu tincidunt etiam.",
      "Faucibus volutpat magna.",
      "Id sed tellus in varius quisque.",
      "Risus egestas faucibus.",
      "Risus cursus ullamcorper.",
    ],
  },
  {
    name: "Big Enterprises",
    href: "#",
    priceMonthly: "550",
    description: ">100 members",
    includedFeatures: [
      "Potenti felis, in cras at at ligula nunc. ",
      "Orci neque eget pellentesque.",
      "Donec mauris sit in eu tincidunt etiam.",
      "Faucibus volutpat magna.",
      "Id sed tellus in varius quisque.",
      "Risus egestas faucibus.",
      "Risus cursus ullamcorper.",
    ],
  },
];
function Pricing() {
  return (
    <div className="bg-white">
      <MetaTitle title={`Pricing - Pilo`} />
      <div className="px-4 py-2">
        <Link to="/">
          <div className="mb-2 flex flex-row items-center fixed left-2 top-2">
            <ArrowLeftIcon className="w-3 h-3 mr-1" />
            <span className="text-sm">Back to home</span>
          </div>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
            Pricing
          </h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            Start managing and optimizing work for your business right now with
            special offers
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200"
            >
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  {tier.name}
                </h2>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-xl font-extrabold text-gray-900">
                    {tier.priceMonthly} $
                  </span>{" "}
                  <span className="text-base font-medium text-gray-500">
                    /month
                  </span>
                </p>
                <a
                  href={tier.href}
                  className="mt-8 block w-full bg-purple-500  rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-purple-700"
                >
                  Choose
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {tier.includedFeatures.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIcon
                        className="flex-shrink-0 h-5 w-5 text-green-500"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
