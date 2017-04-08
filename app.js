var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// connect to Mongoose
mongoose.connect("webtechdevops.centralindia.cloudapp.azure.com:51003/surabhiLimsDB");
//var db = mongoose.connection;
//this code will let you send response across domains
app.use(function(req, res, next) {   
    res.header("Access-Control-Allow-Origin", "*");    //setting the headers
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");   
    next();
});

// var booksSchema = mongoose.Schema({
//     title: String,
//     author: String,
//     publisher: String,
//     category: String,
//     count: Number
// }, { collection: "BooksData" });

// var BooksDat = mongoose.model("BooksData", booksSchema);
var Book = require('./models/book');

var bookObj = Book({
    title: "Lincoln in the Bardo: A Novel",
    author: "George Saunders",
    publisher: "penguine",
    category: "fiction",
    count: 2,
});
var bookObj1 = Book({
    title: "Crush (Yale Series of Younger Poets)",
    author: "Richard Siken",
    publisher: "rupa",
    category: "poetry",
    count: 3,
});
var bookObj2 = Book({
    title: "Stories of Anton Chekhov",
    author: "Anton Chekhov",
    publisher: "chekhov",
    category: "Self Help",
    count: 4,
});
var bookObj3 = Book({
    title: "A Death in the Family (Penguin Classics) ",
    author: "James Agee",
    publisher: "american publisher",
    category: " literature",
    count: 5,
});
var bookObj4 = Book({
    title: "Seize the Day  ",
    author: "Saul Bellow",
    publisher: "audio edition",
    category: " non-fiction",
    count: 6,
});
var bookObj5 = Book({
    title: "Quarrel and Quandery ",
    author: "Saul Bellow",
    publisher: "audio edition",
    category: "romantic",
    count: 7,
});



bookObj.save(function(err) {
    if (err) {
        throw err;
    } else {
        console.log("Book1 created")
    }
});
bookObj1.save(function(err) {
    if (err) {
        throw err;
    } else {
        console.log("Book2 created")
    }
});
bookObj2.save(function(err) {
    if (err) {
        throw err;
    } else {
        console.log("Book3 created")
    }
});
bookObj3.save(function(err) {
    if (err) {
        throw err;
    } else {
        console.log("Book4 created")
    }
});
bookObj4.save(function(err) {
    if (err) {
        throw err;
    } else {
        console.log("Book5 created")
    }
});
bookObj5.save(function(err) {
    if (err) {
        throw err;
    } else {
        console.log("Book6 created")
    }
});

app.get('/', function(req, res) {
    res.send("hello lims team"); //send the response

});
// app.get('/api')
app.listen(3000, function() {
    console.log('running on ur port');
});

var bookRouter = express.Router();
bookRouter.route('/Books')
    .get(function(req, res) {

        var query = req.query;
        console.log(query);
        //   req.query{
        //        count :{$gt:3}
        //    };

        Book.find({ count: { $gt: 3 } }, function(err, books) {
            // if (err)
            // {
            //   console.log(err);

            // }
            // else
            console.log(books);
            res.json(books);
        });
        // var responseJson = { hello: "this is my API" };
        // res.json(responseJson);

    });


app.use('/api', bookRouter);

// var lib = mongoose.model("BooksData", booksSchema);
// lib.find({ 'author': "Saul Bellow" });
// surabhiTDB.getCollection('BooksDat').find({})
//ab tu route create kar using express.router se..
/*
var router=express.router;//initialse router

router.route('/users).get(function(req,res){

    

})*/