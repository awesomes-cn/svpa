var co = require('co'),
    fs = require('co-fs'),
    Q = require('q'),
    gm = require('gm').subClass({imageMagick: true}),
    fnv = require('fnv-plus'),
    bc = require('./bgColor');


var gmp = function gmo(filepath,text,bgcolor,width){
  var deferred = Q.defer();
  gm(200, 200, bgcolor)
    .encoding("Unicode")
    .fontSize(100)
    .fill("#FFF")
    .font("WenQuanYi Micro Hei Mono")
    .drawText(0, 0, text,'Center')
    .resize(width)
    .write(filepath, deferred.resolve);
  return deferred.promise;  
}
 


var generateAvatar = function* (uid,width){ 

  var range = [50,100,200]
  width = parseInt(width || 50);
  console.log("IN" + width);
  if (range.indexOf(width) < 0) {
    width = 50;
  };


  var flag = fnv.hash(uid).str();
  var filepath = "avatars/" + flag + "-" + width + ".png";

  var exists = yield fs.exists(filepath);
  
  if (!exists){
    yield gmp(filepath,uid[0].toUpperCase(),bc(flag),width)
  }

  return filepath

}




module.exports = generateAvatar;
