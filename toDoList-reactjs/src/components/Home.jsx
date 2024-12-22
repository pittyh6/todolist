import React from "react";
import AddTask from "./AddTask";
import Dropbox from "./Dropbox";
import Tasks from "./Tasks";

function Home(props) {
  return (
    <div>
      <h1 className="text-5xl font-bold underline py-14">To Do List</h1>
      <div className="addTask">
        <AddTask />
      </div>
      <div className="tasks">
        <Tasks />
      </div>
    </div>
  );
}

export default Home;
