import React, { useState, useEffect, useReducer } from "react";
import Tasks from "./Tasks";

// export const tasksArrObj = [
//   {
//     taskDescription: "Study React JS",
//     status: "Pending",
//   },
//   {
//     taskDescription: "Study React Native",
//     status: "Completed",
//   },
//   {
//     taskDescription: "Rest",
//     status: "Completed",
//   },
// ];

function AddTask(props) {
  const [addTask, setAddTask] = useState(() => {
    try {
      const savedTasks = localStorage.getItem("task");
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
      console.error("Failed to parse tasks from localStorage:", error);
      return [];
    }
  });

  const [inputValue, setInputValue] = useState("");
  function handleAddTask() {
    if (inputValue.trim() !== "") {
      setAddTask((prevTask) => [
        ...prevTask,
        { taskDescription: inputValue, status: "Pending" },
      ]);
      setInputValue("");
    }
  }

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(addTask));
    // Trigger custom event after updating localStorage
    const event = new Event("localStorageUpdate");
    window.dispatchEvent(event);
  }, [addTask]);

  console.log("AddTask after useEffect localStorage: ", addTask);

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
