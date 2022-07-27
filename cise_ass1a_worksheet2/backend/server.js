const express = required("express");

const server = express();
server.get('/api/articles/:id', (req,res) => {
    const article = articles.find((n) => n._id === req.params.id);
    res.send(article);
    console.log(req.params);
});


const articles = require("./dummydata/articles");
server.listen(5000, console.log("Server is working and Listening port 5000"));