import React from "react";
import "./TodoEraseList.css";

import { useDispatch } from "react-redux";
import { cancelTodoList } from "../features/todoSlice";
import { CgPlayListRemove } from "react-icons/cg";
import Button from "@material-ui/core/Button";

function TodoEraseList() {
  const dispatch = useDispatch();
  const handleEraseTodoList = (e) => {
    dispatch(cancelTodoList());
  };
  return (
    <div className="eraseTodoList">
      <Button
        variant="contained"
        color="secondary"
        onClick={(e) => handleEraseTodoList(e)}
      >
        Cancella lista
        <CgPlayListRemove />
      </Button>
    </div>
  );
}

export default TodoEraseList;
