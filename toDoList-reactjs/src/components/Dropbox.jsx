import React, { useState } from "react";

function Dropbox(props) {
  const options = ["All", "Completed", "Pending"];
  const dropboxOptions = options.map((option, index) => (
    <option value={option} key={index}>
      {option}
    </option>
  ));
  return (
    <select
      name="filter"
      id="filter"
      onChange={props.onChangeFilter}
      className="rounded px-2 bg-[#ede9fe]"
    >
      {dropboxOptions}
    </select>
  );
}

export default Dropbox;
