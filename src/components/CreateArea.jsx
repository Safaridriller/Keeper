import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom  from "@material-ui/core/Zoom";
import axios from "axios";
function CreateArea(props) {
  console.log(props.index);
  var [note,set] = React.useState({
    title : [],
    content : []
  })
  console.log(props);
  
  var [expanded,setExpand] = React.useState(false);
 
  function handle(event){
    var {name,value} = event.target;
    set((prev) => {
      return {
        ...prev,
        [name] : value
      }
    })
  }
  function styling(){
    setExpand(true);
  }
  function submitNote(event){
    axios.post("http://localhost:3000/add",{'title' : note.title ,'content' : note.content,'id' : props.id})
    props.onadd(note);
    event.preventDefault();
    
  }
  return (
    <div>
      <form className="create-note">
        <input onChange={handle} name="title" placeholder="Title" value={note.title}  hidden = {!expanded}/>
        <textarea onClick={styling} onChange={handle} name="content" placeholder="Take a note..." rows= {expanded ? "3" : "1"} value={note.content}/>
        <Zoom in = {expanded}><Fab onClick={submitNote} type="submit"><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
