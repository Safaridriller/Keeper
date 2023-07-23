import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios"
function App() {
  var [notes,set] = React.useState([]);
  var [index,setIndex] = React.useState();
  
  const fetchData = async() => {
    const {data} = await axios.get("http://localhost:3000/message");
    if(notes.length === 0 && data.length > 0){
      
      set(data);
      console.log("attempt");
      setIndex(data[data.length - 1].id)
    }
   
  }


  React.useEffect(() => {
    fetchData();
  })

 

 
  function addnote(note){
    set((prev) => {
      return [...prev,note]
    })
    setIndex((prev) => {
      return prev + 1;
    })
    
  }
  function delNote(id,title){
    axios.post("http://localhost:3000/del",{'id' : id,'title' : title})
    set((prev) => {
      return notes.filter((note,index) => {
        return note.id !== id 
      })
    })
    
  }
  console.log();
  return (
    <div>
      <Header />
      <CreateArea onadd = {addnote} id = {index}/>
      {notes.map((note,index) => {
        return <Note 
        title = {note.title}
        content = {note.content}
        id = {note.id}
        delNote = {delNote}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;
