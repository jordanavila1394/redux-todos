import React from "react";
import { useSelector } from "react-redux";
import { selectPendingTodo } from "../features/todoSlice";

function TodoCounterPending() {
  const counterPendingTodo = useSelector(selectPendingTodo);
  return counterPendingTodo ? (
    <div>
      {counterPendingTodo.length > 0 ? (
        <div>
          Hai ancora <strong>{counterPendingTodo.length}</strong> attività da
          svolgere{" "}
        </div>
      ) : (
        <div>Non hai attività da svolgere</div>
      )}
    </div>
  ) : (
    ""
  );
}

export default TodoCounterPending;
