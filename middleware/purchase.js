var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

module.exports = function(req,res,next){
  if(req.user){
    var qty = req.body.Quantity;
    var books = [];
    console.log(req.body);
    next();
  }
  else{
    res.redirect('/');
  }
};
