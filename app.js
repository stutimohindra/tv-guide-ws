var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();
var collect = require('./controller/collect');
var validateParams = require('./controller/validate');
var userDetails = require('./controller/userDetails');
var config = require('./config')
// var corsOptions = {
//   origin: 'http://localhost:8080',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', index);
app.use('/users', users);
app.post('/insertUser',collect.collectRequestDataUser,validateParams.validateRequestDataUser,userDetails.createUser);

app.post('/insertUserFav',collect.collectRequestDataUserFav,validateParams.validateRequestDataUserFav,userDetails.createUserFav);
app.get('/getUserFav/:facebookId/:name',collect.collectRequestDataGetUserFav,validateParams.validateRequestDataGetUserFav,userDetails.getUserFav);
app.get('/updateUserFav/:facebookId/:name/:channelId',collect.collectRequestDataUserFavUpdate,validateParams.validateRequestDataGetUserFavUpdate,userDetails.updateUserFav)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(config.portHttp);
module.exports = app;
