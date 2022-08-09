const fs = require('fs')
const getNotes = function(){
    return "your notes......"

}

const addNote = function(title,body){
     const notes = loadNote()
     const duplicateNotes = notes.filter((note)=>{
        return note.title==title
     })
     if(duplicateNotes.length===0){
        notes.push({
            title:title,
            body:body   
         })
    
         saveNote(notes)
         console.log("addes new note");
    
     }
     else{
        console.log("note title taken");
     }
    }

const saveNote = function(notes){
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync("notes.json",dataJson)

}


const loadNote = function(){
    try{
    const dataBuffer = fs.readFileSync("notes.json")
    const parseData = JSON.parse(dataBuffer)
    return parseData
    }
    catch(e){
        return []
     }

}
module.exports = {
    getNotes:getNotes, 
    addNote:addNote}
