import React, { useState, useEffect } from "react";

import Dropbox from "./Dropbox";
import AddTask from "./AddTask";

function Tasks(props) {
  //get the data in localStorage
  const [filterTasksShow, setFilterTasksShow] = useState(
    JSON.parse(localStorage.getItem("task") || "[]")
  );
  useEffect(() => {
    const updateTasks = () => {
      const updatedTasks = JSON.parse(localStorage.getItem("task") || "[]");
      setFilterTasksShow(updatedTasks);
    };
    // Set up a custom event to listen for localStorage updates
    const handleStorageChange = () => {
      updateTasks();
    };
    window.addEventListener("localStorageUpdate", handleStorageChange);
    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("localStorageUpdate", handleStorageChange);
    };
  }, []);

  //showing the data from localStorage and filtering
  const handleChangeFilter = (event) => {
    const tasksSaved = JSON.parse(localStorage.getItem("task") || "[]");
    const filterValue = event.target.value;
    if (filterValue === "Completed") {
      const completedTask = tasksSaved.filter(
        (task) => task.status === "Completed"
      );
      setFilterTasksShow(completedTask);
    } else if (filterValue === "Pending") {
      const pendingTask = tasksSaved.filter(
        (task) => task.status === "Pending"
      );
      setFilterTasksShow(pendingTask);
    } else {
      setFilterTasksShow(tasksSaved);
    }
  };

  //what is showing in the screen
  const displayTasksArr = filterTasksShow.map((taskElement, index) => (
    <div className="taskItem" key={index}>
      <input type="checkbox" />
      <p>{taskElement.taskDescription}</p>
      <button>Edit</button>
      <button>Del</button>
    </div>
  ));

  return (
    <>
      <div className="filtering">
        <Dropbox onChangeFilter={handleChangeFilter} />
      </div>
      <div className="showTasks">{displayTasksArr}</div>
    </>
  );
}

export default Tasks;
