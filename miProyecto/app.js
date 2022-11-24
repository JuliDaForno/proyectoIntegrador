var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//importamos session
const session = require('express-session')
const db = require('./database/models')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const postRouter = require('./routes/posteo');
const { nextTick } = require('process');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // busca en la carpeta publics la ruta que nosotros insertamos



app.use(session({
  secret: "miProyecto",
  resave: false,
  saveUninitialized: true }));

app.use(function(req,res,next){
  if(req.session.user != undefined){
    res.locals = { idusuario: req.session.user.id,
      usuario: req.session.user.usuario, 
      foto: req.session.user.foto,
      nombre: req.session.user.nombre,
      
    }
   }

  return next();
});

app.use(function(req,res,next){
  if (req.cookies.usuarioId != undefined && req.session.user == undefined){
    let idUsuarioEnCookie = req.cookies.usuarioId;
    db.Usuario.findByPk(idUsuarioEnCookie)
    .then((user) => {
      req.session.user = user.dataValues;
      res.locals.user = user.dataValues;

      return next();
    })
    .catch((err)=>{
      console.log(err);
      return next();
    });

  } else{
    return next();
  }
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postRouter);
app.use('/logout', usersRouter )


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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


module.exports = app;