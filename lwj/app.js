var express = require('express');
var ejs = require('ejs');
var app = express();
var path = require('path')


var loginctr = require("./routes/login")
var about = require("./routes/about")
var contact = require("./routes/contact")
var  index = require("./routes/index")
var portfolio = require("./routes/")
var team = require("./routes/team")

// 设置模板引擎
app.engine('.html',ejs.__express);
app.set("view engine","html");

// 设置静态文件
app.use(express.static(path.join(__dirname,"public")));

app.use("/",loginctr);
app.use("/about",about);
app.use("/contact",contact);
app.use("/index",index);
app.use("/portfolio",portfolio);
app.use("/team",team);


app.listen(3000);