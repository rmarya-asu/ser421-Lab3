var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var user = function(name,password,cart){
  this.name = name;
  this.password = password;
  this.cart = cart
}

var auth = function(req,res,next){
  console.log(req.session.user);
  if(req.session.user){
    debugger;
    console.log('User is authenticated already');
    //req.session.loginCount+=1;
    console.log(req.session.user);
    next();
  }else{
    //check the request method here?

    if(req.body.username === req.body.password && req.body.username!=undefined){
      //set the session variable.
      var userCart = {};
      req.session.user = new user(req.body.username,req.body.password);
      console.log('setting express session ',req.session.user);
      next();
    }
    else{
      res.redirect('/landing');
    }
  }

};

var unauth = function(req,res,next){
  if(req.session.user){
    req.session = null;
    next();
  }
}

module.exports = {auth,unauth}
