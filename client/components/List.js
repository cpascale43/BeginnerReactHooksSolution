import React, { useContext } from "react";
import { ListContext } from "../context";

const List = () => {
  const [tasks, setTasks] = useContext(ListContext);

  const toggleItem = (idx) => {
    const deleted = tasks[idx];
    const newTasks = tasks.filter((task) => task !== deleted);
    setTasks(newTasks);
  };

  return (
    <ul>
      {tasks.map((item, idx) => {
        return (
          <div key={idx} className="row p-3">
            <div className="col">
              <li>{item}</li>
            </div>
            <div className="col d-flex justify-content-end">
              <button
                onClick={() => toggleItem(idx)}
                type="button"
                className="btn btn-danger btn-sm"
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </ul>
  );
};

export default List;
