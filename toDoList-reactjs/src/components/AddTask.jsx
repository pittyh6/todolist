import React, { useState, useEffect, useReducer } from "react";

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
  const [addTask, setAddTask] = useState([
    { taskDescription: "Study React Native", status: "Completed" },
    { taskDescription: "Holiday", status: "Completed" },
  ]);

  function handleAddTask() {
    setAddTask([...addTask, { taskDescription: "Travel", status: "Pending" }]);
    console.log("after setItem: " + addTask);
    localStorage.setItem(
      "task",
      JSON.stringify({
        addTask,
      })
    );
  }

  return (
    <>
      <input type="text" placeholder="Insert your tasks here" />
      <button onClick={handleAddTask}>+</button>
    </>
  );
}

export default AddTask;
