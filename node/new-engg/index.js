const express = require('express');
const app = express();
const port = 8080;

app.get('/student', function(req, res){
    res.send("get all students")
})

app.get('/student/:id', function(req, res){
    let id = req.params.id;
    res.send("students id:" +id)
})

app.post('/student', function(req, res){
    res.send("students post")
})

app.put('/student', function(req, res){
    res.send("students put")
})

app.delete('/student', function(req, res){
    res.send("students delete")
})

app.listen(port, function(){
    console.log("server is running on port:" +port)
})
