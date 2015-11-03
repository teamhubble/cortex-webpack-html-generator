var fs = require("fs");
var FileUtils_1 = require('./FileUtils');
var WebpackParser_1 = require('./WebpackParser');
function CortexWebpackHtmlGenerator(options) {
    this.options = options || {};
}
CortexWebpackHtmlGenerator.prototype.apply = function (compiler) {
    var self = this;
    compiler.plugin('emit', function (compilation, compileCallback) {
        var inputFilename = this.options.template || "assets/index.html.tmpl";
        var outputFilename = this.options.output_filename || "index.html";
        self.emitHtml(compilation, inputFilename);
        compileCallback();
    });
};
CortexWebpackHtmlGenerator.prototype.emitHtml = function (compilation, inputFilename, outputFilename) {
    var compileStats = compilation.getStats();
    var assetsWithExtensions = WebpackParser_1.default.GetAssetsByExtensions(compileStats);
    var html;
    console.log(assetsWithExtensions);
    var tmpl = require("blueimp-tmpl").tmpl;
    var file = FileUtils_1.default.GetFileContent(inputFilename);
    try {
        html = tmpl(file, assetsWithExtensions);
    }
    catch (e) {
        compilation.errors.push('CortexWebpackHtmlGenerator: Template error ' + e);
    }
    compilation.assets[outputFilename] = {
        source: function () {
            return html;
        },
        size: function () {
            return html.length;
        }
    };
};
module.exports = CortexWebpackHtmlGenerator;
