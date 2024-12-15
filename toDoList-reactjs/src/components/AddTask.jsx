import React from "react";

//export const tasksArr = ["Study React JS", "Study React Native"];
export const tasksArrObj = [
  {
    task: "Study React JS",
    status: "Incompleted",
  },
  {
    task: "Study React Native",
    status: "Completed",
  },
  {
    task: "Rest",
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
