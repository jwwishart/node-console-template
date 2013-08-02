module.exports = function(grunt) {

// Configuration

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			tests: {
				options: {
					expr: true, // Should prevent expect(x).to.be.undefined issue
					es5: true
				},
				src: ['test/**/*.js']
			},
			code: {
				src: ['src/**/*.js']
			}
		},

		simplemocha: {
			options: {
				globals: ['should'],
				timeout: 3000,
				ignoreLeaks: false,
				ui: 'bdd',
				reporter: 'spec'
			},

			all: {
				src: ['test/**/*.js']
			}
		},

		watch: {
			files: ['test/**/*.js','src/**/*.js'],
			tasks: ['jshint', 'test']
		}
	});
 

// Load NPM Modules

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-simple-mocha');


// Task Registration

	grunt.registerTask('lint', ['jshint']);
	grunt.registerTask('test', ['simplemocha:all']);
	grunt.registerTask('build', ['jshint', 'test']);

	grunt.registerTask('default', ['build']);
};