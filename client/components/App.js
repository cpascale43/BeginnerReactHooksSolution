import React from "react";
import AddItem from "./AddItem";
import List from "./List";
import { ListContextProvider } from "../context";

const App = () => (
  <ListContextProvider>
  <div className="container p-5">
    <h1 className="display-3">
      A List<small className="text-muted"> with React Hooks</small>
    </h1>
    <AddItem />
    <div className="card scroll shadow-sm p-3 mb-5 bg-white rounded">
      <List />
    </div>
  </div>
  // </ListContextProvider>
);

export default App;
