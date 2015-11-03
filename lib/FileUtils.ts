var fs = require('fs');
var URL = require('url');
var path = require('path');

export default class FileUtils {
  public static GetFileContent(src: string): string {
    return fs.readFileSync(src, 'utf-8');
  }

  public static GetFileExtension(filename: string): string {
    var url = URL.parse(filename);
    var ext = path.extname(url.pathname);
    if (ext) {
      return ext.slice(1)
    } else {
      return '';
    }
  }
}
