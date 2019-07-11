const fs = require('fs'),
    getNotes = require('./utils/notes');

console.log(getNotes());
//fs.writeFileSync('notes.txt', 'Text to place into the file.');
//fs.appendFileSync('notes.txt', 'New Material appended yo.');