//appointments stored in database
var express = require("express");
var bodyParser = require('body-parser');

var conn = require('./config');
var app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use("images", express.static(__dirname + "/public/images"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    res.redirect('/index.html')
})

app.get('*', function (req, res) {
    res.redirect('/index.html')
})

app.get('/index.html', function (req, res) {
    res.sendFile("index.html");
})
app.get('/policy.html', function (req, res) {
    res.sendFile("policy.html", { root: __dirname });
})
app.get('/submitted.html', function (req, res) {
    res.sendFile("submitted.html", { root: __dirname });
})
app.get('/faq.html', function (req, res) {
    res.sendFile("faq.html", { root: __dirname });
})
app.get('/firstarticle.html', function (req, res) {
    res.sendFile("firstarticle.html", { root: __dirname });
})
app.get('/write_article_form.html', function (req, res) {
    res.sendFile("write_article_form.html", { root: __dirname });
})
app.get('/appointment_form.html', function (req, res) {
    res.sendFile("appointment_form.html", { root: __dirname });
})


app.post('/appointment_form', function (req, res) {
    conn.query("INSERT INTO appointments (service, firstname, lastname, email, address, city, state, zip, comments) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);",
        [req.body.service, req.body.firstname, req.body.lastname, req.body.email,
        req.body.address, req.body.city, req.body.state, req.body.zip, req.body.comments
        ], function (error, results, fields) {
            if (error) {
                console.log(error);
                res.json({
                    success: false
                });
            } else {
                res.json({
                    success: true
                })
            }
        });

});
app.listen(3000);