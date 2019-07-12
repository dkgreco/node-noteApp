//Program Constants
const
    //Developer Custom Libs
    commandOptions = require('./utils/pco'),

    //Third Party Libs
    yargs = require('yargs'),

    //Console & Logging Customizations
    logError = require('./utils/errHandler').logError,
    errMsg0 = 'Invalid Command Supplied.  Program Terminated.',

    //Program Source Values
    UICommand = yargs.argv._[0];

//Program Temp Variables
let validatedUICommand = commandOptions.find(commandOption => commandOption.c === UICommand),
    //Error Trap - Invalid Command Provided
    selectedOption = (validatedUICommand === undefined) ? logError(errMsg0) : validatedUICommand;

//Program Command Delegator
yargs.command({
    command: selectedOption.c,
    describe: selectedOption.d,
    builder: selectedOption.b,
    handler: selectedOption.h
});

//Execute the Command
yargs.parse();