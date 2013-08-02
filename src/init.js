
var args = process.argv;

function executeCommand(name, relevantArgs, scriptPath) {
	var command = require('./commands/' + name + '.js');
	command.execute(relevantArgs, scriptPath);
}


// Configure
//

GLOBAL.config = {};
GLOBAL.config = require('../config.js').config;


// Execute Command
//

if (args.length > 2) {
	executeCommand(args[2], args.slice(3), args[1]);
	return;
}

executeCommand('help', [], args);
