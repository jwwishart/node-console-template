node-console-template

Setup

- clone this repo
- change the bin/name-me file to the name that you want to execute on the command line
- open the package.json file and change the bin/name-me key to the same name as 
  what you changed the file to in the bin directory and change the path in the value 
  for that key to the relative path to the file in the bin directory

Structure

- bin directory contains a starter file which is converted to an executable file
  by nodejs, this executable just calls the src/init.js file
- src directory contains all the source files
	- init.js - contains script to 
		1. load the /config.js file into GLOBAL.config object
		2. executes the first argument by calling the relevant
		   command contained in the src/commands folder
	- commands directory - you create a file for each
	  command. You pass the command as the first argument
	  after your bin/name-me file (whatever you name it)
		- help.js - default simple "help" command. You can
		  type 'name-me help' or 'name-me' to get the help
- test directory - contains 1 test file 'test.js' which
  is just a default template for mocha specifications
- config.js - this is the config file, you can add global
  settings to this file and they will be loaded in
  on execution of the command
- Gruntfile.js - standard grunt file. Includes jshint,
  grunt watch and mocha setup
- package.json - standard package file. You should
	- Change esp the key and value for the bin/name-me file
	  so that the command is created appropriately on
	  npm install (or linking)
- README.md - this file

jwwishart