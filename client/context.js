import React, { useState, createContext } from "react";

// Create Context object
export const ListContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const ListContextProvider = props => {
  const [tasks, setTasks] = useState([]);

  return (
    <ListContext.Provider value={[tasks, setTasks]}>
      {props.children}
    </ListContext.Provider>
  );
};
