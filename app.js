const chalk = require("chalk");
const { argv, demandOption } = require("yargs");
const yargs = require("yargs")
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
        console.log("Title "+argv.title);
        console.log("body "+argv.body);
    }
})

yargs.command({
    command:'remove',
    describe: 'remove a new note',
    handler: ()=>{
        console.log(chalk.red("remove a new note"));
    }
})

console.log(yargs.argv);