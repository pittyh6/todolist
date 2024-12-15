import React, { useState } from "react";

import Dropbox from "./Dropbox";
import AddTask, { tasksArrObj } from "./AddTask";

function Tasks(props) {
  const displayTasksArr = tasksArrObj.map((taskElement, index) => (
    <div className="taskItem" key={index}>
      <input type="checkbox" />
      <p>{taskElement.task}</p>
      <button>Edit</button>
      <button>Del</button>
    </div>
  ));
  return <>{displayTasksArr}</>;
}

export default Tasks;
