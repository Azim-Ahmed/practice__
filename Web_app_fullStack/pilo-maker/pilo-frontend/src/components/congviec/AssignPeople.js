import React from "react";
const peoples = [
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];
function AssignPeople() {
  return (
    <div>
      <span className="label-text text-black text-md font-bold">
        Chọn người thực hiện
      </span>
      <select
        id="location"
        name="location"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        defaultValue="Canada"
      >
        {peoples.map((people, index) => (
          <option key={index}>{people.name}</option>
        ))}
      </select>
    </div>
  );
}

export default AssignPeople;
