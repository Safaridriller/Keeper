const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/notesdb");
const postSchema = new mongoose.Schema({
    id : Number,
    title : String,
    content : String
  });
const note = mongoose.model("notes",postSchema);
app.use(cors());
app.use(express.json())
app.post("/add",function(req,res){
    console.log(req.body);
    note.insertMany({id : req.body.id + 1,title : req.body.title ,content : req.body.content})
    res.redirect("/");
})
app.get("/message",function(req,res){
    note.find().then(results => {
        res.json(results);
    })
})
app.get("/",function(req,res){
    
})
app.listen(3000,function(){
    console.log("Server working");
})
app.post("/del",function(req,res){
    var index = req.body.id;
    console.log(index);
    note.deleteOne({id : index,title : req.body.title}).then(result => {
        // notes.filter((note1,index) => {
        //     return (id !== index && note1.title !== req.body.title)
        // })
        res.redirect("/");
    });
 
})