import React, { useState } from "react";

function Dropbox(props) {
  const options = ["All", "Completed", "Pending"];
  const dropboxOptions = options.map((option, index) => (
    <option value={option} key={index} className="bg-[#ede9fe]">
      {option}
    </option>
  ));
  return (
    <select
      name="filter"
      id="filter"
      onChange={props.onChangeFilter}
      className="rounded px-2 bg-[#ede9fe] mb-2.5"
    >
      {dropboxOptions}
    </select>
  );
}

export default Dropbox;
