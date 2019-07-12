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
        delegateTask(argv) { noteUtils.createNote(argv) }
    } ,
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
        delegateTask(argv) { noteUtils.removeNote(argv) }
    },
    {
        "c": "read",
        "d": "Read a note from the program generated file.",
        "b": {
            "title": {
                "describe": "Title of Note To Fetch",
                "demandOption": true,
                "type": "string"
            }
        },
        delegateTask(argv) { noteUtils.readNote(argv) }
    },
    {
        "c": "list",
        "d": "List all notes from the program generated file.",
        delegateTask() { noteUtils.listNotes() }
    }
];
//debugger;
//Exportable Functionality
module.exports = commandOptions;