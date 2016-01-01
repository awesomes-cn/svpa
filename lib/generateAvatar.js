var co = require('co'),
    fs = require('co-fs'),
    Q = require('q'),
    gm = require('gm').subClass({imageMagick: true}),
    fnv = require('fnv-plus'),
    pinyin = require("pinyin"),
    ft = require('./fontStyle'),
    bc = require('./bgColor');


var gmp = function(filepath,text,bgcolor,size,font){
  var deferred = Q.defer();
  gm(200, 200, bgcolor)
    .encoding("Unicode")
    .fontSize(100)
    .fill("rgba(255,255,255,0.3)")
    .stroke("rgba(255,255,255,0.3)",1)
    .font("./fonts/" + font.path)
    .drawText(0, 0, text,'Center')
    .resize(size)
    .write(filepath, deferred.resolve);
  return deferred.promise;  
}
 


var generateAvatar = function* (uid,size,font){ 
  // -size
  var range = [50,100,200]
  size = parseInt(size || 50);
  if (range.indexOf(size) < 0) {
    size = 50;
  }; 

  //- 字体
  font = ft.fontStyle(font);



  uid = (uid == '[object Generator]' ? 'A' : uid);

  uid = pinyin(uid)[0][0]


  var flag = fnv.hash(uid).str();
  var bgcoloIndex = flag[flag.length - 1].toUpperCase();

  var filepath = "avatars/" + uid[0].toUpperCase() +  "-" + bgcoloIndex +  "-" + size + "-" + font.name +".png";

  var exists = yield fs.exists(filepath);
  
  if (!exists){
    yield gmp(filepath,uid[0].toUpperCase(),bc(bgcoloIndex),size,font)
  }

  return filepath;
}




module.exports = generateAvatar;
