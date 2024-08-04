const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.write('<a href="home">Home</a> &nbsp; ');
    res.write('<a href="contact">Contact</a> &nbsp; ');
    res.write('<a href="about">About</a> &nbsp; ');
    res.write("</br>");
    res.write("</br>");

    // res.write("hello World");
    if (req.url == '/favicon.ico') {
        res.write(' ');
    }
    else if (req.url == '/home') {
        res.write(fs.readFileSync('./Home.html'));        
    }
    else if (req.url == '/contact') {
        res.write(fs.readFileSync('./Contact.html'));        
    }
    else if (req.url == '/about') {
        res.write(fs.readFileSync('./about.html'));
    }
    else {
        res.write("Hello World");
    }
    res.end();
});

var post = 3221;
let a = 15;
server.listen(3221, () => {
    console.log("Server started");
})
