const chalk = require('chalk')
const yargs = require('yargs')
const notes=require('./notes.js')
//customize yargs version
yargs.version('1.1.0')


//create a command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:"Notes Body",
            demandOption:true,
            type: 'string'
        }
    },
    handler : function(argv){
        notes.addNotes(argv.title,argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove the note',
    builder:{
        title:{
            describe:"Note Title",
            demandOption:true,
            type:'string'
        }
    },
    handler : function(argv){
        notes.removeNotes(argv.title)
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler : function(){
        console.log("Listing out all Note!")
    }
})

//create the read command
yargs.command({
    command:'read',
    describe:'Read a note',
    handler:function(){
        console.log("Reading the Note!")
    }
})

yargs.parse()

// console.log(yargs.argv) //imp
