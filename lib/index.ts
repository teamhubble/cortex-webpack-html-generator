var fs = require("fs");
import FileUtils from './FileUtils';
import WebpackParser from './WebpackParser';
function CortexWebpackHtmlGenerator(options) {
  this.options = options || {};
}

CortexWebpackHtmlGenerator.prototype.apply = function(compiler) {
  var self = this;
  compiler.plugin('emit', function(compilation, compileCallback) {
    var inputFilename = self.options.template || "assets/index.html.tmpl";
    var outputFilename = self.options.output_filename || "index.html";
    self.emitHtml(compilation, inputFilename, outputFilename);
    compileCallback();
  });
};


CortexWebpackHtmlGenerator.prototype.emitHtml = function(compilation, inputFilename: string, outputFilename: string) {
  var compileStats = compilation.getStats();
  var assetsWithExtensions = WebpackParser.GetAssetsByExtensions(compileStats);

  var html;
  console.log(assetsWithExtensions);

  // Override the template loading method:
  var tmpl = require("blueimp-tmpl").tmpl;
  var file = FileUtils.GetFileContent(inputFilename);
  try {
    html = tmpl(file, assetsWithExtensions);
  } catch(e) {
    compilation.errors.push('CortexWebpackHtmlGenerator: Template error ' + e);
  }

  compilation.assets[outputFilename] = {
    source: function() {
      return html;
    },
    size: function() {
      return html.length;
    }
  };
};

export = CortexWebpackHtmlGenerator;
