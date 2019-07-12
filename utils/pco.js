const
    //Developer Custom Libs
    noteUtils = require('./notes'),

    //Program Developer Variables
    commandOptions = [
    {
        "c": "create",
        "d": "Create and add a note to the program generated file.",
        "b": {
            "title": {
                "describe": "Title For Note",
                "demandOption": true,
                "type": "string"
            },
            "body": {
                "describe": "Note Content",
                "demandOption": true,
                "type": "string"
            }
        },
        "h": function(argv) {
            console.log("Creating note and adding it to the PG file.", argv);
            noteUtils.createNote(argv);
        }
    },
    {
        "c": "remove",
        "d": "Remove a note from the program generated file.",
        "b": {
            "title": {
                "describe": "Title For Note",
                "demandOption": true,
                "type": "string"
            }
        },
        "h": function(argv) {
            console.log("Removing note from the PG file.");
            noteUtils.removeNote(argv);
        }
    },
    {
        "c": "read",
        "d": "Read a note from the program generated file.",
        "h": function() {
            console.log("Fetching a note from the PG file.");
        }
    },
    {
        "c": "list",
        "d": "List all notes from the program generated file.",
        "h": function() {
            console.log("Fetching all notes from the PG file.");
            noteUtils.listNotes();
        }
    }
];

//Exportable Functionality
module.exports = commandOptions;