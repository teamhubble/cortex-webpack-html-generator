var fs = require("fs");
var FileUtils_1 = require('./FileUtils');
var WebpackParser = (function () {
    function WebpackParser() {
    }
    WebpackParser.GetAssetsByExtensions = function (compilationStats) {
        var assets = Object.keys(compilationStats.compilation.assets);
        var extensions = {};
        for (var i = 0; i < assets.length; ++i) {
            console.log(FileUtils_1.default.GetFileExtension(assets[i]));
            var ext = FileUtils_1.default.GetFileExtension(assets[i]);
            if (typeof (ext) === "string") {
                if (extensions[ext] === undefined) {
                    extensions[ext] = new Array();
                }
                extensions[ext].push(assets[i]);
            }
        }
        return extensions;
    };
    return WebpackParser;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WebpackParser;
