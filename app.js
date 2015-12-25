var koa = require('koa'),
    auth = require('koa-basic-auth'),
    app = module.exports = koa(),
    fs = require('fs'),
    gm = require('gm').subClass({imageMagick: true}),
    fnv = require('fnv-plus'),
    ga = require('./lib/generateAvatar');;

// custom 401 handling

app.use(function* (next){
  try {
    yield* next;
  } catch (err) {
    console.log(err.status)
    if (401 == err.status) {
      this.status = 401;
      this.body = 'cant haz that';
    } else {
      throw err;
    }
  }
});

// require auth

//app.use(auth({ name: 'tj', pass: 'tobi' }));

// secret response

app.use(function* (){
  var path = this.request.url.split("/");
  var filename = yield ga(path[1],path[2]);
  console.log(filename);
  this.body = filename;
});

if (!module.parent) app.listen(8080);
