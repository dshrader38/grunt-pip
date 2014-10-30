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
      punctuation: '.',
      separator: ', ',
      vritualenv: 'venv',
      verbose: true
    });

    var cmd = 'virtualenv ' + options.virtualenv + '\n';

    var done = this.async();

    grunt.util.spawn({
      cmd: 'virtualenv',
      args: ['venv']
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

    // // Iterate over all specified file groups.
    // this.files.forEach(function(f) {
    //   // Concat specified files.
    //   var src = f.src.filter(function(filepath) {
    //     // Warn on and remove invalid source files (if nonull was set).
    //     if (!grunt.file.exists(filepath)) {
    //       grunt.log.warn('Source file "' + filepath + '" not found.');
    //       return false;
    //     } else {
    //       return true;
    //     }
    //   }).map(function(filepath) {
    //     // Read file source.
    //     return grunt.file.read(filepath);
    //   }).join(grunt.util.normalizelf(options.separator));

    //   // Handle options.
    //   src += options.punctuation;

    //   // Write the destination file.
    //   grunt.file.write(f.dest, src);

    //   // Print a success message.
    //   grunt.log.writeln('File "' + f.dest + '" created.');
    // });
  });

};
