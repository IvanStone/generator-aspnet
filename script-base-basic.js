'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var Generator = module.exports = function Generator() {
  yeoman.generators.Base.apply(this, arguments);
  this.sourceRoot(path.join(__dirname, './templates/'));
};

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.generateStandardFile = function(sourceFile, targetFile) {
  this.log('You called the aspnet subgenerator with the arg: ' + chalk.green(this.arguments[0] || targetFile));
  this.fs.copy(this.templatePath(sourceFile), this.destinationPath(targetFile));
  this.log(chalk.green(targetFile) + ' created.');
};
