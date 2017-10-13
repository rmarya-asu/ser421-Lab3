//landing page - the start of our web app -> needs to render a table
//TODO: add the table, link and route to buy something.
var express = require('express');
var router = express.Router();

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
router.get('/', function(req, res, next) {
  res.render('landing', { title:'Books', header:'Shop around for books', books:books});
});

module.exports = router;
