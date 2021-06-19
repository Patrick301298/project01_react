import React from "react";
import StateProvider from "./StateProvider";
import TodoList from "../ui/TodoList";
import KeyStrokeHandler from "./KeyStrokeHandler";
function App() {
  return (
    <StateProvider>
      <KeyStrokeHandler>
        <TodoList />
      </KeyStrokeHandler>
    </StateProvider>
  );
}

export default App;
