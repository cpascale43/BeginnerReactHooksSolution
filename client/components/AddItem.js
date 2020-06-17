import React, { useState, useContext } from "react";
import { ListContext } from "../context";

const AddItem = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useContext(ListContext)

  const handleKey = (evt) => {
    if (input === "") return;
    if (evt.key === "Enter") {
      setTasks([...tasks, input])
      setInput("")
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Tasks go here..."
        aria-label="Your items here"
        aria-describedby="button-addon2"
        value={input}
        onChange={(evt) => setInput(evt.target.value)}
        onKeyDown={handleKey}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-primary"
          type="button"
          id="button-addon2"
          onClick={() => {
            if (input === "") return;
            setTasks([...tasks, input])
            setInput("")
          }}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddItem;
