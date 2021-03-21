import React from "react";
import "./TodoItem.css";
import Checkbox from "@material-ui/core/Checkbox";

import { useDispatch } from "react-redux";
import { setCheck, eraseTask } from "../features/todoSlice";
import { FaRegTrashAlt } from "react-icons/fa";
import Button from "@material-ui/core/Button";

const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch();
  const handleCheck = (e) => {
    dispatch(setCheck(id));
  };
  const handleErase = (e) => {
    dispatch(eraseTask(id));
  };
  return (
    <div className="todoItem">
      <Checkbox
        checked={done}
        color="primary"
        onChange={(e) => handleCheck(e)}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <p className={done ? "todoItem--done" : "todoItem"}>{name}</p>
      <Button
        variant="contained"
        color="secondary"
        onClick={(e) => handleErase(e)}
      >
        <FaRegTrashAlt />
      </Button>
    </div>
  );
};

export default TodoItem;
