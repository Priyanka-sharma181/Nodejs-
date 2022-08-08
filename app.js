// const fs = require("fs")
// it is creating file or write text 
// fs.writeFileSync('notes.txt','this  was created by node.js')
 
// append data in existing file 
// fs.appendFileSync('notes.txt',  "i am priyanka")

const add = require('./utils.js')
const getNotes = require("./notes")
const validator = require('validator')
const chalk = require("chalk")
const sum = add(4,-2)
// console.log(sum);
const notes = getNotes()
// console.log(chalk.blue.inverse.bold(notes));
// console.log(validator.isEmail("priyanka@gmail.com"));
// console.log(process.argv);

// the process.argv returns all the command line argument
const command = process.argv[2]

if(command=='Add'){
    console.log("adding notes");
}
else if(command=='removing'){
console.log("removing notes");
}