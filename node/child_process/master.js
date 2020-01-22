var fork = require('child_process').fork;
var cpus = require('os').cpus;
for(var i; i < cpus.length; i ++){
	fork('./work.js')
}