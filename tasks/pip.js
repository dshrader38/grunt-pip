/*
 * grunt-pip
 * https://github.com/davidshrader/grunt-pip
 *
 * Copyright (c) 2014 david.shrader
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';

  //var exec = require('exec');
  var exec = require('child_process').exec;

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('pip', 'Grunt plug-in to install Python packages via PIP.', function() {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      vritualenv: 'venv',
      verbose: false
    });

    var args = []

    args.push(options.vritualenv);

    if (options.verbose) {
      args.push('-v');
    }
    grunt.log.writeln(args);

    var done = this.async();
    grunt.util.spawn({
      cmd: 'virtualenv',
      args: args
    }, function(error, result, code) {
        grunt.log.writeln(result);
        done(error);
    });

    // grunt.util.spawn({
    //   cmd: ['ls'],
    //   args: ['-l']
    // }, function(error, result, code) {

    //     grunt.log.writeln('hey there');
    //     grunt.log.writeln(error);
    //     grunt.log.writeln(code);

    //     done();
    // });

    // check to see if virtualenv command is available
    // if (options.vritualenv !== 'venv') {
    //   grunt.fatal('\'virtualenv\' command not found');
    // }

    // exec('ls', function (error, stdout, stderr) {
    //   grunt.log.writeln('hey there');
    //   console.log('stdout: ' + stdout);
    //   console.log('stderr: ' + stderr);
    //   if (error !== null) {
    //     console.log('exec error: ' + error);
    //    };
    // });

    // exec(['ls', '-l'], function(err, out, code) {
    //   if (err instanceof Error)
    //     throw err;
    //   process.stderr.write(err);
    //   process.stdout.write(out);
    //   process.exit(code);
    // });

    // var cmd = 'virtualenv ' + options.virtualenv + '\n';
    // cmd += 'python benjamint.py';

    // exec(cmd, function(err, stdout) {
    //   if (err instanceof Error)
    //     throw err;
    //   process.stderr.write(err);
    //   process.stdout.write(out);
    //   process.exit(code);
    //   // grunt.log.write(stdout);
    // });

    // var vritualenv = options.virtualenv;
    // grunt.log.writeln(vritualenv);

    // var verbose = options.verbose;
    // grunt.log.writeln(verbose);

    // var modules = options.modules;
    // grunt.log.writeln(modules);

  });

};
