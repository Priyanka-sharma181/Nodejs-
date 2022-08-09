const chalk = require("chalk");
const yargs = require("yargs")
const notes = require('./notes')
yargs.command({
    command:'add',
    describe: 'adding a new note',
    builder:{
        title:{
                describe:"notes title",
                demandOption:true,
                type:'string'
        },
        body:{
            describe:"notes body",
            demandOption:true,
            type:'string'
        }

    },
    handler: function (argv){
       notes.addNote(argv.title,argv.body)

    }
})

yargs.command({
    command:'remove',
    describe: 'remove a new note',
    builder:{
        title:{
                describe:"notes title",
                demandOption:true,
                type:'string'
        }

    },
    handler: function (argv){
       notes.removeNotes(argv.title)

    }
})

console.log(yargs.argv);