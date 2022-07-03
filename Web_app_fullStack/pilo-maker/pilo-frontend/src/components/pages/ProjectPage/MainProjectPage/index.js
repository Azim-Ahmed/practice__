import React from 'react'
import useWindowSize from "../../../../hooks/useWindowSize"
import TaskList from "./ProjectBoard/TaskList"
function MainProjectPage() {
    const [width, height] = useWindowSize();
    const mainHeight = height - 56;
    return (
        <div className="w-full bg-violet-500" style={{height: `${mainHeight}px`}}>
            <TaskList />
        </div>
    )
}

export default MainProjectPage
