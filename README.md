# grunt-restful

> Gets data from a restful api

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-mingle --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-restful');
```

## The "restful" task

### Overview
In your project's Gruntfile, add a section named `restful` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  restful: {
    options: {
      usernamePrompt: 'Username: ',
      passwordPrompt: 'Password: ',
      passwordReplaceChar: '*',
      fetchDescription: 'Getting ',
      method: 'get',
      uri: '',
      secure: false,
      destination: './response.xml'
    }
  },
})
```

### Options

#### options.usernamePrompt
Type: `String`
Default value: `'Username: '`

Username prompt.  Used for https connections.

#### options.passwordPrompt
Type: `String`
Default value: `'Password: '`

Password prompt.  Used for https connections.

#### options.passwordReplaceChar
Type: `String`
Default value: `'*'`

A string value that is used when the password is hidden.

#### options.fetchDescription
Type: `String`
Default value: `'Getting '`

When displaying the uri in the execution of grunt task, what text to display before the uri.  if you want the uri to be hidden, use 'callDescription' instead.

#### options.method
Type: `String`
Default value: `'get'`

Which restful method to use.

#### options.uri
Type: `String`
Default value: `''`

The uri to connect to.

#### options.secure
Type: `String`
Default value: `'false'`

Whether https requires a username and password.  User will be prompted, password will be hidden with *s.

#### options.destination
Type: `String`
Default value: `'./response.xml'`

The destination file to save your results.

#### options.callDescription
Type: `String`
Default value: `undefined`

#### options.data
Type: `Object`
Default value: `undefined`

If defined, sends data along with request.

### Usage Examples

#### Default Options
In this example, the default options are used to do get the https page over ssl.

```js
grunt.initConfig({
  mingle: {
    options: {
      usernamePrompt: 'Username: ',
      passwordPrompt: 'Password: ',
      passwordReplaceChar: '*',
      fetchDescription: 'Posting ',
      method: 'post',
      uri: 'https://www.everything.com',
      secure: true,
      destination: './everything.xml',
      data: {answer: 'nothing!'}
    }
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
