import React, { useState } from "react";
import { tasksArrObj } from "./AddTask";

export function handleChangeFilter(event) {
  if (event.target.value === "Completed") {
    const tasksFiltered = tasksArrObj
      .filter((task) => task.status === "Completed")
      .map((task) => task.task); // Extract only the task names
    console.log("Completed tasks:", tasksFiltered);
    return { tasksFiltered };
  } else if (event.target.value === "Pending") {
    const pendingTasks = tasksArrObj
      .filter((task) => task.status === "Incompleted")
      .map((task) => task.task); // Extract only the task names
    console.log("Pending tasks:", pendingTasks);
    return { pendingTasks };
  } else {
    const allTasks = tasksArrObj.map((task) => task.task); // Extract all task names
    console.log("All tasks:", allTasks);
    return (
      <>
        <input type="checkbox" />
        <p>{allTasks}</p>
        <button>Edit</button>
        <button>Del</button>
      </>
    );
  }
}

function Dropbox(props) {
  const options = props.options;
  const dropboxOptions = options.map((option, index) => (
    <option value={option} key={index}>
      {option}
    </option>
  ));
  return (
    <select name="filter" id="filter" onChange={handleChangeFilter}>
      {dropboxOptions}
    </select>
  );
}

export default Dropbox;
