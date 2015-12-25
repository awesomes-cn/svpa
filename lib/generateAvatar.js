var fs = require('fs'),
    gm = require('gm').subClass({imageMagick: true}),
    fnv = require('fnv-plus');


var generateAvatar = function* (uid,width){
  console.log("IN");

  var flag = fnv.hash(uid).str();
  var filename = flag + ".png";

  var exists = yield test(filename);

  if (!exists){
    console.log("走了");

    var range = [50,100,200]
    width = width || 50;
    if (range.indexOf(width) < 0) {
      width = 50;
    };

    gm(200, 200, "#ddff99f3")
    .encoding("Unicode")
    .fontSize(200)
    .fill("#FFF")
    .font("WenQuanYi Micro Hei Mono")
    .drawText(27, 173, "H")
    //.resize(40)
    .write(filename, function (err) {
      return filename;
    });
  }

  return filename;



}

var test = function* (filename){
  return fs.exists(filename)
}



module.exports = generateAvatar;
