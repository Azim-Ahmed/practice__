import React from 'react'
import { CheckCircleIcon } from "@heroicons/react/outline";
function FilterDoneStatus() {
    return (
        <div className="flex ml-10 flex-row items-center">
          <CheckCircleIcon className="w-5 h-5 mr-1 text-gray-500" />
          <span className="text-gray-600 text-sm font-normal">
            Trạng thái hoàn thành
          </span>
        </div>
    )
}

export default FilterDoneStatus
