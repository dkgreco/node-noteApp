const
    //Node Core Modules
    fs = require('fs'),

    //Program Variables
    fileName = 'data/notes.json',

    //Program Error Handling Variables
    logError = require('./errHandler').logError,
    errMsg0 = 'There are currently no logged results. Starting with an empty array...',
    errMsg1 = 'Note Not Found: ',
    errMsg2 = '. Unable to Remove.',
    errMsg3 = 'Title Already Taken.  Please re-add note with a different title...',
    errMsg4 = 'Title for Note does not exist. Read Failed...',

    //Program Developer Fxns
    _loadNotes = () => {
        //Try to load in a datafile, if it fails return an empty array to work with
        try {
            const data = fs.readFileSync(fileName).toString();
            return JSON.parse(data);
        } catch(e) {
            return [];
        }
    },
    _fetchAllNotes = () => {
        let notes = _loadNotes();

        //Error Trap If No Notes Found
        (Object.entries(notes).length === 0) ? logError(errMsg0) : null;

        //Log the Notes
        notes.forEach(note => {
            console.log(note);
        });
        console.log('Logged ', notes.length, ' notes.');
        return null;
    },
    _addNote = argv => {
        let notes = _loadNotes();

        //Dup-Check for title name in PG File. Dups Not Allowed.
        notes.filter(note => {
            if (note.title === argv.title) {
                return logError(errMsg3);
            }
        });

        //If an error isn't returned, jump to adding the note to the db.
        notes.push({
           title: argv.title,
           body: argv.body
        });

        fs.writeFileSync(fileName, JSON.stringify(notes));

        return null;
    },
    _removeNote = argv => {
        let notes = _loadNotes(),
            noteFound = notes.filter(note => {
                return note.title === argv.title;
            });

        //Error Trap If No Note Found
        Object.entries(noteFound).length === 0 ? logError(errMsg1.concat(argv.title,errMsg2)) : null;

        //Create New Dataset
        let dataToSave = notes.filter(note => {
            return note.title !== argv.title;
        });

        fs.writeFileSync(fileName, JSON.stringify(dataToSave));
        return null;
    },
    _fetchNote = argv => {
    let notes = _loadNotes(),
        noteFound = notes.filter(note => {
            return note.title === argv.title;
        });

        //Error Trap If No Note Found
        Object.entries(noteFound).length === 0 ? logError(errMsg4) : null;

        //Print the Note
        console.log(noteFound);
        return null;
    };


//Exportable Functionality
module.exports = {
    createNote: _addNote,
    listNotes: _fetchAllNotes,
    removeNote: _removeNote,
    readNote: _fetchNote
};