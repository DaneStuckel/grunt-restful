/*
 * grunt-restful
 * https://github.com/DaneStuckel/grunt-restful
 *
 * Copyright (c) 2013 Dane Stuckel
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Configuration to be run (and then tested).
    'restful': {
        options: {
            uri: 'https://mingle.eng.shaw.ca/api/v2/projects/project_1_4_guide_program/cards/8756.xml',
            secure: false
        }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['restful']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test']);

};
