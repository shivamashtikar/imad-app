var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var article={ 
    articleOne={
        title: 'article-one | shivam ashtikar',
        heading: 'Article One',
        date: 'Aug 17, 2017',
        content: `<p>
                        this is the content for my first article.    this is the content for my first article.    this is the content for my first article.    this is the content for my first article.    this is the content for my first article.    this is the content for my first article.    this is the content for my first article.    this is the content for my first article.    this is the content for my first article.    this is the content for my first article.    this is the content for my first article.    this is the content for my first article.    this is the content for my first article.    this is the content for my first article.    this is the content for my first article.    this is the content for my first article.    this is the content for my first article.    this is the content for my first article.    this is the content for my first article.    this is the content for my first article.    this is the content for my first article.    this is the content for my first article.    this is the content for my first article.    this is the content for my first article.    this is the content for my first article.    this is the content for my first article.    this is the content for my first article.    this is the content for my first article.    this is the content for my first article.    this is the content for my first article.
                    </p>`
    },
    articleTwo={
        title: 'article-two | shivam ashtikar',
        heading: 'Article two',
        date: 'Aug 18, 2017',
        content: `<p>
                        this is the content for my second article.  
                    </p>`},
    articleThree={
        title: 'article-three | shivam ashtikar',
        heading: 'Article three',
        date: 'Aug 19, 2017',
        content: `<p>
                        this is the content for my third article.
                    </p>`
    }
};
function createTemplate(data){
    var title=data.title;
    var date =data.date;
    var heading=data.heading;
    var content=data.content;
    var htmlTemplate=`
                <html>
                <head>
                    <title>
                        ${title}
                    </title>
                    <meta name="wiewport" content="width=device-width,initial scale=1">
                    <link href="/ui/style.css" rel="stylesheet" />
                </head>
                <body>
                    <div class="container">
                        <div>
                            <a href="/">Home</a>
                        </div>
                        <hr/>
                        <h3>
                            ${heading}
                        </h3>
                        <div>
                            ${date}
                        </div>
                        <div>
                            ${content}
                        </div>
                    </div> 
                </body>
            </html>

    `;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req,res){

    res.send(createTemplate(articleOne));
});
app.get('/article-two', function(req,res){
    res.send("this is from article two and all the contents will be displayed here");
});
app.get('/article-three', function(req,res){
    res.send("this is from article three and all the contents will be displayed here");
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
