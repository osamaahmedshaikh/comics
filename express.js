var express = require('express');
var fs = require('fs');
var url = require('url');
var bodyParser=require('body-parser'); 
var multer=require('multer'); 
var upload = multer();
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url ="mongodb://localhost:27017/";
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/xwww-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(upload.array());
app.post("/update/",function(req,res){
    console.log(req.body);
    // titlename = req.body.titlename;
    // console.log("Input data: "+titlename);
    // date = req.body.date;
    // console.log("Input data: "+date);
    // news = req.body.news;
    // console.log("Input data: "+news);
    // link = req.body.link;
    // console.log("Input data: "+link);
    // data = "\n"+ "Comic Name: " + titlename +"\n" + "date: " + date +"\n" + "news: " + news +"\n" + "link: " + link ; 
    console.log(data);
    // console.log(p_url);
    var data = JSON.stringify(req.body);
    MongoClient.connect(url,function(err, db) {
        if(err)throwerr;
        dbo = db.db('comic');
        var myobj = { name:titlename, date:date, news:news, link:link};
        dbo.collection("information").insertOne(myobj,function(err, res) {
            if(err)throwerr;
            console.log("\n"+"1 document inserted");
            db.close();
        });
    });
//     fs.appendFile('lab8.txt',data,function(err) {
//         res.writeHead(200, {
//             'Content-Type': 'text/html'
//         });
//         res.write('The form was saved!');
//         res.end();
//         console.log('Saved!');});
});
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin, X - Requested - With, Content - Type, Accept, content - type, application / json');
    next();
});
    
app.get("/data/",function(req,res){
    MongoClient.connect(url,function(err, db) {
        if(err)throwerr;dbo = db.db('comic');
        dbo.collection("information").findOne({},function(err, result) {
            if(err)throwerr;
            db.close();
            var datats = result;
            res.json(datats);
        });  
    });
    
   
//     fs.readFile('lab8.txt', 'utf8', function (err, textdata) {
//         res.write(textdata);
//         res.end(); });
});
app.get("",function(req,res){
    res.sendFile('index.html',{
        root:__dirname
    })
});
app.use(express.static(__dirname));
app.listen(process.env.PORT || 8080);
console.log("The app is listening on port 8080")