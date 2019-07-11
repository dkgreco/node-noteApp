const fs = require('fs'),
    getNotes = require('./utils/notes'),
    chalk = require('chalk');

const error = chalk.bold.red.underline,
    success = chalk.bold.greenBright.underline.inverse;

console.log(error('Error: Broken Chain Upstream...'));
console.log(success('Successfully integrated chalk!!'));

//fs.writeFileSync('notes.txt', 'Text to place into the file.');
//fs.appendFileSync('notes.txt', 'New Material appended yo.');