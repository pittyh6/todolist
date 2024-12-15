import React, { useState } from "react";

import Dropbox from "./Dropbox";
import AddTask, { tasksArrObj } from "./AddTask";

function Tasks(props) {
  const [filterTasksShow, setFilterTasksShow] = useState(tasksArrObj);

  const handleChangeFilter = (event) => {
    const filterValue = event.target.value;
    if (filterValue === "Completed") {
      const completedTask = tasksArrObj.filter(
        (task) => task.status === "Completed"
      );
      setFilterTasksShow(completedTask);
    } else if (filterValue === "Pending") {
      const pendingTask = tasksArrObj.filter(
        (task) => task.status === "Pending"
      );
      setFilterTasksShow(pendingTask);
    } else {
      setFilterTasksShow(tasksArrObj);
    }
  };

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
