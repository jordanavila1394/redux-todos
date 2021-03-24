import React from "react";
import "./TodoItem.css";
import Checkbox from "@material-ui/core/Checkbox";

import { useDispatch } from "react-redux";
import { setCheck, eraseTask } from "../features/todoSlice";
import { FaRegTrashAlt } from "react-icons/fa";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import Moment from "react-moment";
import "moment-timezone";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

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
      <GreenCheckbox
        checked={done}
        color="primary"
        onChange={(e) => handleCheck(e)}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <p className={done ? "todoItem itemDone" : "todoItem"}>{name}</p>
      <Moment
        className="todoItemTime"
        interval={1000}
        format="HH:mm:ss"
        durationFromNow
      >
        {id}
      </Moment>
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
