import React, { Fragment, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  completeChecklistItem,
  editChecklistItem,
  deleteChecklistItem,
  getTask
} from "redux/actions/tasks";
import { XIcon, PencilIcon, TrashIcon } from "@heroicons/react/solid";
function ChecklistItem({ item, task }) {
  const [text, setText] = useState(item.text);
  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setText(item.text);
  }, [item.text]);
  
  const onEdit = async (e) => {
    e.preventDefault();
    dispatch(editChecklistItem(task.id, item._id, { text }));
    setEditing(false);
  };

  const onComplete = async (e) => {
    dispatch(
      completeChecklistItem({
        taskId: task.id,
        complete: e.target.checked,
        itemId: item._id,
      })
    );
  };
  const onDelete = async (e) => {
    dispatch(deleteChecklistItem(task.id, item._id));
  };

  return (
    <div>
      {editing ? (
        <form onSubmit={(e) => onEdit(e)}>
          <div className="flex flex-row space-x-2">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && onEdit(e)}
              className="border-2 border-gray-300 rounded-md"
            />
            <div className="flex items-center">
              <button type="submit" className="btn mr-2">
                Save
              </button>
              <button
                className=""
                onClick={() => {
                  setEditing(false);
                  setText(item.text);
                }}
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="flex items-center justify-between">
          <div className="flex flex-row items-center">
            <input
              checked={
                task.checklists.find((taskItem) => taskItem._id === item._id)
                  .complete
              }
              onChange={onComplete}
              name={item._id}
              type="checkbox"
              className=" h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <span className="text-black ml-2">{item.text}</span>
          </div>
          <div className="flex flex-row space-x-3">
            <button className="" onClick={() => setEditing(true)}>
              <PencilIcon className="w-5 h-5 text-orange-600" />
            </button>
            <button className="" onClick={onDelete}>
              <TrashIcon className="w-5 h-5 text-red-500" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChecklistItem;
