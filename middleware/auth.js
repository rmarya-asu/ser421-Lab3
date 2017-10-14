var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var user = function(name,password){
  this.name = name;
  this.password = password;
}

var auth = function(req,res,next){
  console.log(req.session.user);
  if(req.session.user){
    debugger;
    console.log('a');
    //req.session.loginCount+=1;
    console.log(req.session.user);
    res.redirect('/shop');
  }else{
    if(req.body.username === req.body.password){
      //set the session variable.
      req.session.user = new user(req.body.username,req.body.password);
      req.session.loginCount =0;
      next();
    }
    else{
      res.redirect('/');
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
