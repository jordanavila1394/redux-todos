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

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: red,
  },
});

const TodoInput = () => {
  const [input, setInput] = useState("");
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
      />
      {/* <button className="buttonPrimary addButton"></button> */}
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" onClick={addTodo}>
          <FaPlus />
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default TodoInput;
