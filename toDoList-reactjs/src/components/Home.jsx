import React from "react";
import Dropbox from "./Dropbox";
import AddTask, { tasksArr } from "./AddTask";
import Tasks from "./Tasks";

function Home(props) {
  const displayTasksArr = tasksArr.map((taskElement) => <p>{taskElement}</p>);
  console.log("array from addTask: " + displayTasksArr);

  return (
    <div>
      <h1>To Do List</h1>
      <div className="addTask">
        {/* <input type="text" placeholder="Insert your tasks here" />
        <button>+</button> */}
        <AddTask />
      </div>
      <div className="filtering">
        <Dropbox options={["All", "Pending", "Completed"]} />
      </div>
      <div className="tasks">
        <Tasks />
      </div>
    </div>
  );
}

export default Home;
