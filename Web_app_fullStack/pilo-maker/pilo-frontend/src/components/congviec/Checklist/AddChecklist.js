import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addChecklistItem, getTask } from "redux/actions/tasks";
import { XIcon } from "@heroicons/react/solid";
function AddChecklist({ taskId }) {
  const [adding, setAdding] = useState(false);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(addChecklistItem(taskId, { text }));
    dispatch(getTask(taskId));
    setText("");
  };
  return !adding ? (
    <div className="mt-4">
      <button
        className="btn btn-success text-white"
        onClick={() => setAdding(true)}
      >
        + Add a checklist
      </button>
    </div>
  ) : (
    <div>
      <div className="flex flex-row mt-3">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="Nhập checklist"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && onSubmit(e)}
              className=" px-3 py-3 border-2 rounded-md border-gray-300 text-black mr-2 text-sm"
            />

            <button className="btn" type="submit">
              Add
            </button>
            <button
              onClick={() => {
                setAdding(false);
                setText("");
              }}
            >
              <XIcon className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddChecklist;
