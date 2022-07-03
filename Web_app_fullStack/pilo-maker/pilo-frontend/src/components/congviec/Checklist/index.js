import React, { useEffect, useState } from "react";
import AddChecklist from "./AddChecklist";
import ChecklistItem from "./ChecklistItem";
function Checklist({ task }) {
  
  return (
    <div>
      <div className="text-md font-bold mb-2 text-black">Checklist</div>
      <div className="space-y-2">
        {task.checklists.map((item) => {
          return <ChecklistItem key={item.id} item={item} task={task} />;
        })}
      </div>

      <div>
        <AddChecklist taskId={task.id} />
      </div>
    </div>
  );
}

export default Checklist;
