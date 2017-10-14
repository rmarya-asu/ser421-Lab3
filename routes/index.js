
/* GET home page. */

//landing page - the start of our web app -> needs to render a table
//TODO: add the table, link and route to buy something.
var express = require('express');
var router = express.Router();
var session = require('express-session');
var auth = require('../middleware/auth');
var books = [{
        title: 'Harry Potter and the Philosophers Stone',
        series: 1,
        author: 'J K Rowling',
        genre: 'Fiction',
        price: 20,
}, {
        title: 'Harry Potter and the Chamber of Secrets',
        series: 2,
        author: 'J K Rowling',
        genre: 'Fiction',
        price: 25,
}, {
        title: 'Harry Potter and the Prizoner of Azkaban',
        series: 3,
        author: 'J K Rowling',
        genre: 'Fiction',
        price:33,
}, {
        title: 'Harry Potter and the Goblet of Fire',
        series: 4,
        author: 'J K Rowling',
        genre: 'Fiction',
        price:23,
}, {
        title: 'Harry Potter and the Order of the Phoenix',
        series: 5,
        author: 'J K Rowling',
        genre: 'Fiction',
        price:22
}, {
        title: 'Harry Potter and the Half blood Prince',
        series: 6,
        author: 'J K Rowling',
        genre: 'Fiction',
        price:32,
}, {
        title: 'Harry Potter and the Deathly Hallows',
        series: 7,
        author: 'J K Rowling',
        genre: 'Fiction',
        price:38
}, {
        title: 'Lord of the Rings: The Fellowship of the Ring',
        series: 1,
        author: 'JRR Tolkeing',
        genre: 'Fiction',
        price:38
}, {
        title: 'Lord of the Rings: The Two Towers',
        series: 2,
        author: 'JRR Tolkein',
        genre: 'Fiction',
        price:32
}, {
        title: 'Lord of the Rings: The Return of the King',
        series: 3,
        author: 'JRR Tolkein',
        genre: 'Fiction',
        price:30
}, {
        title: 'War and Peace',
        series: 1,
        author: 'Lev Nicolayevich Tolstoy',
        genre: 'Historical Fiction',
        price:100
}];

/* GET home page. */
router.get('/landing', function(req, res, next) {
  res.render('index', { title:'Books', header:'Shop around for books', books:books});
});

router.get('/login',function(req,res,next){
  res.render('login');
});
//TODO: GET route for individual books.
router.post('/signin',auth.auth,function(req,res,next){
      res.render('loggedin');
});
router.get('/list',auth.auth,function(req,res,next){
      res.render('shop',{title:'shop around!!',user:req.user,books:books});
});

var calculate = function(quantity,selectedBooks){
  var cart = {
    qty:quantity,
    books:[],
    total:0,
    card:0,
    cardType:'MasterCard',
    exp:'no'
  }
  for (var i =0;i<selectedBooks.length;i++){
      var bookandprice = selectedBooks[i].split(',');
      cart.books.push({title:bookandprice[0],price:parseInt(bookandprice[1]),totalPrice:parseInt(bookandprice[1]*cart.qty)});
      cart.total+=bookandprice[1]*cart.qty;
  }
  console.log('adding cart to session');
  return cart;
}
router.post('/purchase',auth.auth,function(req,res,next){
    var cart = calculate(parseInt(req.body.Quantity),req.body.Books);
    req.session.user.cart = cart;
    res.render('purchase',{title:'your shopping cart ',cart:cart})
});

router.post('/confirm',auth.auth,function(req,res,next){
  // req.session.user.cart.card = req.card
  console.log(req.body);
  req.session.user.cart.card = req.body.Cardnumber;
  req.session.user.cart.cardType = req.body.Creditcard;
  req.session.user.cart.exp = (req.body.expressdelivery ==='on')?'yes':'no';

  res.render('confirm',{title:'confirmation page',customer:req.session.user})
})

router.get('/logout',auth.unauth,function(req,res,next){
  res.redirect('/');
});
module.exports = router;
