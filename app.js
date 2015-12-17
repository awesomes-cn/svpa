var koa = require('koa');
var auth = require('koa-basic-auth');
var app = module.exports = koa();

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
  var uid = path[1];
  var size = path[2].split("_");
  var width = parseInt(size[0]);
  var height = parseInt(size[1]);
  this.body = height;
});

if (!module.parent) app.listen(8080);
