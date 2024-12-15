import React from "react";

//export const tasksArr = ["Study React JS", "Study React Native"];
export const tasksArrObj = [
  {
    taskDescription: "Study React JS",
    status: "Pending",
  },
  {
    taskDescription: "Study React Native",
    status: "Completed",
  },
  {
    taskDescription: "Rest",
    status: "Completed",
  },
];

function AddTask(props) {
  return (
    <>
      <input type="text" placeholder="Insert your tasks here" />
      <button>+</button>
    </>
  );
}

export default AddTask;
