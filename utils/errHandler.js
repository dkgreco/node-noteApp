const
    //Third Party Libs
    chalk = require('chalk'),

    //Developer Custom Fxns
    error = chalk.bold.redBright.underline.inverse,
    _logError = function(errMsgX) {
        console.log(error(errMsgX));
        return process.exit(0, errMsgX);
    };

module.exports = {
    logError: _logError
};
