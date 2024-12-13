import React from "react";

function Dropbox(props) {
  const options = props.options;
  const dropboxOptions = options.map((option) => (
    <option value={option} key={option}>
      {option}
    </option>
  ));
  console.log(dropboxOptions);
  return (
    <div>
      <select name="filter" id="filter">
        {dropboxOptions}
      </select>
    </div>
  );
}

export default Dropbox;
