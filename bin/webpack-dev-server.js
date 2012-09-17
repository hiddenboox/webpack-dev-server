#!/usr/bin/env node

var path = require("path");
var Server = require("../lib/Server");

var argv = require("optimist")

	.usage("webpack-dev-server " + require("../package.json").version + "\n" +
			"webpack-dev-server <webpack entry point>")

	.string("content-page")
	.describe("content-page", "A html page to load")

	.string("options")
	.describe("options", "webpack options")

	.describe("port", "The port")
	.default("port", 8080)

	.demand(1)

	.argv;

var options = {};

if(argv["content-page"])
	options.content = path.resolve(argv["content-page"]);

if(argv.options)
	options.webpack = require(path.resolve(argv.options));

new Server(path.resolve(argv._[0]), options).listen(argv.port);