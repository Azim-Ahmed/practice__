import React from 'react'
import { FilterIcon, ChevronDownIcon } from "@heroicons/react/outline";
function FilterGroupCongViec() {
    return (
        <div className="flex flex-row items-center justify-center">
          <FilterIcon className="w-5 h-5 mr-1 text-gray-500" />
          <span className="text-gray-600 text-sm font-normal">
            Lọc công việc theo
          </span>
          <ChevronDownIcon className="w-4 h-4 ml-1 text-gray-600" />
        </div>
    )
}

export default FilterGroupCongViec
