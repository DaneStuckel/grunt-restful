/*
 * grunt-restful
 * https://github.com/DaneStuckel/grunt-restful
 *
 * Copyright (c) 2013 Dane Stuckel
 * Licensed under the MIT license.
 */

'use strict';

var rest = require('restler'),
    read = require('read');

module.exports = function (grunt) {
    grunt.registerTask('restful', 'Connect to restful api and download response', function () {
        var done = this.async();
        var options = this.options({
            usernamePrompt: 'Username: ',
            passwordPrompt: 'Password: ',
            passwordReplaceChar: '*',
            fetchDescription: 'Getting ',
            method: 'get',
            uri: '',
            secure: false,
            destination: './response.xml'
        });

        function handleSuccess(data, response) {
            grunt.file.write(options.destination, response.raw);
            grunt.log.ok();
            done();
        }

        function handleError(data, response) {
            grunt.warn(data);
            done(false);
        }

        function ask(restOptions) {
            grunt.log.writeln(options.callDescription || (options.fetchDescription + options.uri) + "\n");
            rest[options.method](options.uri, restOptions)
                .on('success', handleSuccess).on('fail', handleError).on('error', handleError);
        }

        if (options.secure) {
            read({
                prompt: options.usernamePrompt
            }, function (error, username) {
                read({
                    prompt: options.passwordPrompt,
                    silent: true,
                    replace: options.passwordReplaceChar
                }, function (error, password) {
                    ask({
                        username: username,
                        password: password,
                        data: options.data
                    });
                });
            });
        } else {
            ask({data: options.data});
        }
    });

};
