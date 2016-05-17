var express = require('express');

var app = express();

console.log(__dirname + "/" + process.argv[2]);

app.use(express.static(process.argv[2]));

app.listen(8800);