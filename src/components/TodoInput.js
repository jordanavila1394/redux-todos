import React, { useState } from "react";
import "./TodoInput.css";
import "../App";
import { useDispatch } from "react-redux";

import { saveTodo } from "../features/todoSlice";
import { FaPlus } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@material-ui/core/Button";

import { toastTypes } from "../module/constants";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const GreenButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[900]),
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const TodoInput = () => {
  const [input, setInput] = useState("");
  const classes = useStyles();

  const dispatch = useDispatch();
  const notifyError = () => toast.error("Inserire un testo!", toastTypes.ERROR);

  const addTodo = () => {
    if (input.length > 0) {
      dispatch(
        saveTodo({
          name: input,
          done: false,
          id: Date.now(),
        })
      );
      setInput("");
    } else {
      notifyError();
    }
  };

  return (
    <div className="input">
      <ToastContainer />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            addTodo();
          }
        }}
      />
      <GreenButton
        variant="contained"
        color="primary"
        className={classes.margin}
        onClick={addTodo}
      >
        <FaPlus />
      </GreenButton>
    </div>
  );
};

export default TodoInput;
