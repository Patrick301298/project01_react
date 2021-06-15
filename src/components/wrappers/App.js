import React from "react";
import StateProvider from "./StateProvider";
import TodoList from "../ui/TodoList";
function App() {
  return (
    <StateProvider>
      <TodoList />
    </StateProvider>
  );
}

export default App;
