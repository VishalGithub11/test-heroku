//RELEASE 0

const express = require('express');
const app = express();
app.get('/', function(req, res) {
    res.send('<h1>Hello World </h1>' +
        "<p>Test Deploy on Heroku for release_2</p>" +
        "<h3>contributers: Vishal and Rahul</h3>")
})
app.listen(process.env.PORT || 3000, function() {
    console.log('Server started at 3000');
});

//Steps involved 
// MOST OF THIS CONTENT ARE ALREADY GIVEN IN EXPRESS.JS WEBSITE. 
// 1. npm init (inside terminal)
// 2. npm install express (inside terminal)
// 3. node release1.js (inside terminal)
// 4. Control + C for exit terminal and than again node release0.js to reinitiate