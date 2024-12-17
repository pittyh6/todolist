import React, { useState, useEffect, useReducer } from "react";
import Tasks from "./Tasks";

export const tasksArrObj = [
  {
    taskDescription: "Study React JS",
    status: "Pending",
  },
  {
    taskDescription: "Study React Native",
    status: "Completed",
  },
  {
    taskDescription: "Rest",
    status: "Completed",
  },
];

function AddTask(props) {
  const [addTask, setAddTask] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleAddTask() {
    // console.log("before setItem: " + addTask);
    // setAddTask([...addTask, { taskDescription: "Travel", status: "Pending" }]);
    if (inputValue.trim() !== "") {
      setAddTask((prevTask) => [
        ...addTask,
        { taskDescription: inputValue, status: "Pending" },
      ]);
      setInputValue("");
    }

    // setAddTask([
    //   ...addTask,
    //   { taskDescription: inputValue, status: "Pending" },
    // ]);
    // console.log("before local storage action: " + addTask);
    // localStorage.setItem(
    //   "task",
    //   JSON.stringify({
    //     addTask,
    //   })
    // );
  }

  useEffect(() => {
    console.log("updated tasks: ", addTask);
    localStorage.setItem("task", JSON.stringify(addTask));
  }, [addTask]);

  return (
    <>
      <input
        type="text"
        placeholder="Insert your tasks here"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTask}>+</button>
    </>
  );
}

export default AddTask;
