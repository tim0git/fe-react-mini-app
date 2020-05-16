import React from "react";

export default function button(props) {
    console.dir(props);
    
  return (
    <label>
      <button className="button" onClick={props.sortTodo}>Sort By Date</button>
    </label>
  );
}
