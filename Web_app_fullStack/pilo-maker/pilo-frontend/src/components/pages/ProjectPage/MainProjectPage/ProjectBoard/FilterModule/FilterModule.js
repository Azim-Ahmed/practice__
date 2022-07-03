import React from "react";
import AttachedFilesModule from "../AttachedFiles/AttachedFilesModule";
import AddGroupCongViec from "../GroupCongViecModule/AddGroupCongViec";
import ViewProjectDetail from "../ProjectDetail/ViewProjectDetail";
import FilterDoneStatus from "./FilterDoneStatus";
import FilterGroupCongViec from "./FilterGroupCongViec";

function FilterModule() {
  return (
    <div className="bg-white flex flex-row justify-between">
      <div className="flex flex-row py-3 px-5 items-center justify-start">
        {/* <FilterGroupCongViec />
        <FilterDoneStatus /> */}
      </div>
      <div className="flex flex-row  items-center justify-start">
        
        <AddGroupCongViec />
        <ViewProjectDetail />
        <AttachedFilesModule />
      </div>
    </div>
  );
}

export default FilterModule;
