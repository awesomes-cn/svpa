var koa = require('koa'),
    co = require('co'),
    fs = require('co-fs'),
    app = module.exports = koa(),
    url = require('url'),
    router = require('koa-route'),
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

// secret response





var avatar =  function *(name){
  var parseUrl = url.parse(decodeURI(this.request.url),true);
  var filename = yield ga(name,parseUrl.query.size);
  this.type = 'image/png';
  this.body = yield fs.readFile(filename);
}

app.use(router.get('/avatar', avatar));
app.use(router.get('/avatar/:name', avatar));

if (!module.parent) app.listen(8080);
