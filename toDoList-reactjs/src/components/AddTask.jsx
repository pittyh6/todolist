import React from "react";

export const tasksArr = ["Study React JS", "Study React Native"];

function AddTask(props) {
  return (
    <>
      <input type="text" placeholder="Insert your tasks here" />
      <button>+</button>
    </>
  );
}

export default AddTask;
