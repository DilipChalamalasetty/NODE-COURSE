const fs = require('fs')
const chalk =require('chalk')
const getNotes=function()
{
    return "Hai this is notes";
}


 const addNotes =function(title,body){
    const notes=loadNotes()
    const duplicateNotes=notes.filter(function(note){
        return note.title === title
    })
    if(duplicateNotes.length === 0){
        notes.push(
            {
                title: title,
                body: body
            }
        )
        saveNotes(notes)
        console.log('New note added!')
    }else{
        console.log('Note title taken!')
    }
    

 }

const saveNotes=function(notes){
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)

}

 const loadNotes= function(){
     try{
        const dataBuffer=fs.readFileSync('notes.json')
        const dataString=dataBuffer.toString()
        return JSON.parse(dataString)
     }
     catch(e){
        return []
     }
    
 }

 const removeNotes=function(title){
    const notes=loadNotes()
    const removenotes = notes.filter(function(note){
        return note.title !== title
    })
    if(notes.length-removenotes.length===1)
    {
        console.log(chalk.bold.green.inverse('Note Deleted!'))
    }else if(notes.length === removenotes.length)
    {
        console.log(chalk.red.bold.inverse('Note with that title not found to delete!'))
    }
    saveNotes(removenotes)
 }
module.exports = {
    getNotes : getNotes,
    addNotes : addNotes,
    removeNotes : removeNotes
}