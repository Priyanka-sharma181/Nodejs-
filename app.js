const chalk = require("chalk")
const yargs = require("yargs")
yargs.command({
    command:'add',
    describe: 'adding a new note',
    handler: ()=>{
        console.log(chalk.blue("adding a new note "));
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