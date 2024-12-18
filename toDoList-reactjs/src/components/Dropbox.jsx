import React, { useState } from "react";
//import { tasksArrObj } from "./AddTask";

function Dropbox(props) {
  const options = ["All", "Completed", "Pending"];
  const dropboxOptions = options.map((option, index) => (
    <option value={option} key={index}>
      {option}
    </option>
  ));
  return (
    <select name="filter" id="filter" onChange={props.onChangeFilter}>
      {dropboxOptions}
    </select>
  );
}

export default Dropbox;
