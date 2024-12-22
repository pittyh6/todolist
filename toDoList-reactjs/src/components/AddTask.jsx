import React, { useState, useEffect, useReducer } from "react";
import Tasks from "./Tasks";

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
