import React from "react";

function Tasks(props) {
  return (
    <div>
      <h1>To Do List</h1>
      <div className="addTask">
        <input type="text" placeholder="Insert your tasks here" />
        <button>+</button>
      </div>
      <div className="filtering">
        <select name="filter" id="filter">
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="tasks">
        <div className="taskItem">
          <input type="checkbox" />
          <p>Study React JS</p>
          <button>Del</button>
        </div>
        <div className="taskItem">
          <input type="checkbox" />
          <p>Study React Native</p>
          <button>Del</button>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
