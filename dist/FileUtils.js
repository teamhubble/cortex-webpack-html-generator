var fs = require('fs');
var URL = require('url');
var path = require('path');
var FileUtils = (function () {
    function FileUtils() {
    }
    FileUtils.GetFileContent = function (src) {
        return fs.readFileSync(src, 'utf-8');
    };
    FileUtils.GetFileExtension = function (filename) {
        var url = URL.parse(filename);
        var ext = path.extname(url.pathname);
        if (ext) {
            return ext.slice(1);
        }
        else {
            return '';
        }
    };
    return FileUtils;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FileUtils;
