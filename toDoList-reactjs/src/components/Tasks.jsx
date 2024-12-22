import React, { useState, useEffect } from "react";

import Dropbox from "./Dropbox";
import AddTask from "./AddTask";

function Tasks(props) {
  //---------------------------------Filter-------------------------------
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
  //------------------------------------------------------------------------
  //--------------------------------Checkbox--------------------------------
  const handleCheckboxChange = (e) => {
    const taskDescription = e.target.value;
    const tasks = JSON.parse(localStorage.getItem("task") || "[]");

    const updatedTask = tasks.map((task) => {
      if (task.taskDescription == taskDescription) {
        return { ...task, status: e.target.checked ? "Completed" : "Pending" };
      }
      return task;
    });
    localStorage.setItem("task", JSON.stringify(updatedTask));
    setFilterTasksShow(updatedTask);
    // Dispatch custom event for other listeners
    const event = new Event("localStorageUpdate");
    window.dispatchEvent(event);
  };

  //------------------------------------------------------------------------
  //----------------------------Delete localStorage Item------------------------------
  function handleDelete(e) {
    const taskIndexTarget = e.target.value;
    const tasksSaved = JSON.parse(localStorage.getItem("task") || "[]");

    const deleteTask = tasksSaved.filter(
      (task) => task !== tasksSaved[taskIndexTarget]
    );

    localStorage.setItem("task", JSON.stringify(deleteTask));
    setFilterTasksShow(deleteTask);
    window.location.reload();
  }
  //------------------------------------------------------------------------
  //----------------------------Delete localStorage Item------------------------------
  function handleEdit(e) {
    const taskIndexTarget = e.target.value;
    const tasksSaved = JSON.parse(localStorage.getItem("task") || "[]");

    const editDescriptionTask = prompt("Update Task Description");
    console.log("editDescriptionTask: ", editDescriptionTask);
    if (editDescriptionTask === null || editDescriptionTask === "") {
      return;
    } else {
      const editingTask = tasksSaved.filter((task) => {
        if (task === tasksSaved[taskIndexTarget]) {
          return (task.taskDescription = editDescriptionTask);
        }
        return task;
      });
      localStorage.setItem("task", JSON.stringify(editingTask));
      setFilterTasksShow(editingTask);
      window.location.reload();
    }
  }
  //------------------------------------------------------------------------
  //what is showing in the screen
  const displayTasksArr = filterTasksShow.map((taskElement, index) => (
    <div
      className="taskItem flex justify-between items-center pt-3"
      key={index}
    >
      <div className="flex justify-center items-center">
        <input
          type="checkbox"
          checked={taskElement.status === "Completed"}
          onChange={handleCheckboxChange}
          value={taskElement.taskDescription}
          className="size-4 mr-1"
        />
        <p id={index} className="text-lg pr-4">
          {taskElement.taskDescription}
        </p>
      </div>

      <div className="buttonsTasks flex justify-start">
        <button onClick={handleEdit} value={index}>
          Edit
        </button>
        <button onClick={handleDelete} value={index}>
          Del
        </button>
      </div>
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
