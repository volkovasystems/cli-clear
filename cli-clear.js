var cliClear = function cliClear( line, commandLineInterface ){
    if( CLEAR_COMMAND_PATTERN.test( line ) ){
        commandLineInterface.write( "\u001B[2J\u001B[;f\u001B[c\r" );
    }
};

const CLEAR_COMMAND_PATTERN = /^\@clear(?:\:.+|$)/;

module.exports = cliClear;