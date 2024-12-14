import React from "react";
import Dropbox from "./Dropbox";
import AddTask, { tasksArr } from "./AddTask";

function Tasks(props) {
  const displayTasksArr = tasksArr.map((taskElement, index) => (
    <div className="taskItem" key={index}>
      <input type="checkbox" />
      <p>{taskElement}</p>
      {console.log(tasksArr.indexOf(taskElement))}
      <button>Edit</button>
      <button>Del</button>
    </div>
  ));

  //console.log("array from addTask: " + displayTasksArr);

  return <div>{displayTasksArr}</div>;
}

export default Tasks;
