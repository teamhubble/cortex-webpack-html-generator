var fs = require("fs");
import FileUtils from './FileUtils';
export default class WebpackParser{
  public static GetAssetsByExtensions(compilationStats: any): any {
    var assets = Object.keys(compilationStats.compilation.assets);

    var extensions = {};

    for (var i = 0; i < assets.length; ++i) {
      console.log(FileUtils.GetFileExtension(assets[i]));
      var ext = FileUtils.GetFileExtension(assets[i]);
      if (typeof(ext) === "string") {
        if (extensions[ext] === undefined) {
          extensions[ext] = new Array();
        }

        extensions[ext].push(assets[i]);
      }
    }

    return extensions;
  }
}
