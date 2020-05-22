import React from "react";

export default function button(props) {
  console.dir(props);

  return (
    <label className="sortContainer">
      <button className="sortButton" onClick={props.sortTodo}>
        Sort By Date
      </button>
    </label>
  );
}
