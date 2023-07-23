import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function handle(){
    props.delNote(props.id,props.title)
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handle}><DeleteIcon /></button>
    </div>
  );
}

export default Note;
