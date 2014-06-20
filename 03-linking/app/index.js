var express = require('express');
var app = express();
var mongoose = require('mongoose');

// connect to db
var mongoIp = process.env.MONGO_PORT_27017_TCP_ADDR;
mongoose.connect('mongodb://' + mongoIp + '/my_database');

// setup schema
var ArticleSchema = mongoose.Schema({
    title: String
});
var Article = mongoose.model('Article', ArticleSchema);

// configure routes
app.get('/', function(req, res) {
    Article.find({}, function(err, docs) {
        res.send(docs.length + ' articles found');
    });
});

app.get('/add', function(req, res) {
    var article = new Article();
    article.title = 'Hello World';
    article.save();
    res.send('new article created');
});

// start server
app.listen(3000);
