var koa = require('koa'),
    co = require('co'),
    fs = require('co-fs'),
    app = module.exports = koa(),
    url = require('url'),
    router = require('koa-route'),
    views = require('co-views'),
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

var render= views(__dirname + '/views', { map: { html: 'swig' }});



function* avatar(name){ 
  var parseUrl = url.parse(decodeURI(this.request.url),true);
  var filename = yield ga(name.toString(),parseUrl.query.size);
  this.type = 'image/png';
  this.body = yield fs.readFile(filename);
}


function* index(){
  this.body = yield render('index.jade', { });
}

app.use(router.get('/', index));
app.use(router.get('/avatar', avatar));
app.use(router.get('/avatar/:name', avatar));

if (!module.parent) app.listen(8080);
