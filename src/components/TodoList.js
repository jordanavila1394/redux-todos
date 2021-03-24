import React from "react";
import TodoItem from "./TodoItem";

import { useSelector } from "react-redux";
import { selectTodoList } from "../features/todoSlice";

function TodoList() {
  const todoList = useSelector(selectTodoList);
  return todoList
    ? todoList.map((item) => (
        <TodoItem
          key={item.id}
          name={item.name}
          done={item.done}
          id={item.id}
        />
      ))
    : "";
}
export default TodoList;
