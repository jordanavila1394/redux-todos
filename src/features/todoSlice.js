import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    setCheck: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          if (item.done === true) {
            item.done = false;
          } else {
            item.done = true;
          }
        }
        return item;
      });
    },
    eraseTask: (state, action) => {
      var index = state.todoList.findIndex((item) => {
        return item.id === action.payload;
      });
      if (index !== -1) state.todoList.splice(index, 1);
    },
    cancelTodoList: (state) => {
      while (state.todoList.length > 0) {
        state.todoList.pop();
      }
    },
  },
});

export const {
  saveTodo,
  setCheck,
  eraseTask,
  cancelTodoList,
} = todoSlice.actions;
// export const selectTodoList = (state) => console.log(state);
export const selectTodoList = (state) => state.todoReducer.todoList;
export const selectPendingTodo = (state) =>
  state.todoReducer.todoList.filter((item) => item.done === false);
export default todoSlice.reducer;
