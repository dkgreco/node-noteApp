const
    //Node Core Modules
    fs = require('fs'),

    //Program Variables
    fileName = 'notes.json',

    //Program Error Handling Variables
    logError = require('./errHandler').logError,
    errMsg0 = 'There are currently no logged results. Starting with an empty array...',

    //Program Developer Fxns
    _loadNotes = () => {
        try {
            const data = fs.readFileSync(fileName).toString();
            return JSON.parse(data);
        } catch(e) {
            return [];
        }
    },
    _fetchAllNotes = () => {
        let notes = _loadNotes();
        (Object.entries(notes).length === 0) ? logError(errMsg0) : notes;
        notes.forEach(note => {
            console.log(note);
        });
        console.log('Logged ', notes.length, ' notes.');
        return null;
    },
    _addNote = argv => {
        let notes = _loadNotes();

        notes.push({
           title: argv.title,
           body: argv.body
        });

        fs.writeFileSync(fileName, JSON.stringify(notes));

        return null;
    },
    _removeNote = argv => {
        let notes = _loadNotes(),
            filteredData = notes.filter(note => {
                return note.title !== argv.title;
            });
        console.log('Filtered: ', filteredData);
    };


//Exportable Functionality
module.exports = {
    createNote: _addNote,
    listNotes: _fetchAllNotes,
    removeNote: _removeNote,
};