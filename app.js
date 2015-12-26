var koa = require('koa'),
    auth = require('koa-basic-auth'),
    co = require('co'),
    fs = require('co-fs'),
    app = module.exports = koa(),
    ga = require('./lib/generateAvatar');

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
  this.type = 'image/png';
  this.body = yield fs.readFile(filename);
});

if (!module.parent) app.listen(8080);
