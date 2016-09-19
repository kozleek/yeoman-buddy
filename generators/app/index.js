'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    var cb = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      chalk.red('Nový projekt!')
    ));

    var prompts = [
        {
            type: "input",
            name: 'site_name',
            message: 'Název:',
            default: this.appname
        },
        {
            type: "input",
            name: 'site_description',
            message: 'Krátký popisek:'
        },
        {
            type: "input",
            name: 'site_author',
            message: 'Autor:',
            default: 'Tomas -kozleek- Musiol (tomas.musiol@gmail.com)'
        },
        {
            type: "confirm",
            name: 'site_bootstrap',
            message: 'CDN Bootstrap?',
            default: true
        },
        {
            type: "input",
            name: 'site_google_analytics',
            message: 'Google Analytics:',
            default: 'UA-XXXXXX'
        }
    ];

    return this.prompt(prompts).then(function (props) {
      this.site_name = props.site_name;
      this.site_description = props.site_description;
      this.site_author = props.site_author;
      this.site_bootstrap = props.site_bootstrap
      this.site_google_analytics = props.site_google_analytics;

      cb();
    }.bind(this));
  },

  configuring: function () {
    this.directory('resources', 'resources');
    this.directory('assets', 'assets');

    this.template('index.html', 'index.html');
    this.template('package.json', 'package.json');
    this.template('bower.json', 'bower.json');
    this.template('gruntfile.js', 'gruntfile.js');
    this.template('README.md', 'README.md');
  },

  install: function () {
    //this.installDependencies();
  },

  end: function(){
    this.spawnCommandSync('git', ['init']);
    this.spawnCommandSync('git', ['add', '--all']);
    this.spawnCommandSync('git', ['commit', '-m', 'Init']);
  }

});
