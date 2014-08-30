/*:
	@module-license:
		The MIT License (MIT)

		Copyright (c) 2014 Richeve Siodina Bebedor

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"packageName": "cli-clear",
			"fileName": "cli-clear.js",
			"moduleName": "cliClear",
			"authorName": "Richeve S. Bebedor",
			"authorEMail": "richeve.bebedor@gmail.com",
			"repository": "git@github.com:volkovasystems/cli-clear.git",
			"testCase": "cli-clear-test.js",
			"isGlobal": true
		}
	@end-module-configuration

	@module-documentation:

	@end-module-documentation

	@include:
	@end-include
*/
var cliClear = function cliClear( line, commandLineInterface ){
    if( CLEAR_COMMAND_PATTERN.test( line ) ){
    	var promptLine = line.match( CLEAR_COMMAND_PATTERN )[ 1 ] || "";

    	var ANSIClearCommandLine = [
    		"\u001B[2J",
    		"\u001B[;f",
    		"\u001B[c",
    		promptLine,
    		"\r"
    	].join( "" );

        commandLineInterface.write( ANSIClearCommandLine );
    }
};

const CLEAR_COMMAND_PATTERN = /^\@clear(?:\:(.+)|$)/;

module.exports = cliClear;