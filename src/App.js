import React from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoHeading from "./components/TodoHeading";
import TodoCounterPending from "./components/TodoCounterPending";
import TodoEraseList from "./components/TodoEraseList";

function App() {
  return (
    <div className="app">
      <div className="app_container">
        <div className="app_headingContainer">
          <TodoHeading />
        </div>
        <div className="app_inputContainer">
          <TodoInput />
        </div>
        <div className="app_todoContainer">
          <TodoList />
        </div>
        <div className="app_footerContainer">
          <TodoCounterPending />

          <TodoEraseList />
        </div>
      </div>
    </div>
  );
}

export default App;
