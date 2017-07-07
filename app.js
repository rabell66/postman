const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const models = require("./models");
app.use('/static', express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/static/index.html");
})

// put routes here
app.get("/todo", function(req, res) {
  models.task.findAll()
    .then(foundTodo => {
      res.send(foundTodo);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});
app.get("/todo/:id", function(req, res) {
  models.task.findOne({
      where:{
          id:req.params
      }
  })
    .then(foundTodo => {
      res.send(foundTodo);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

app.post("/todo", function(req, res) {
   var newTodo = models.task.build(req.body);
    newTodo.save().then(function(foundUser) {
        return res.send(foundUser);
      })
      .catch(function(err) {
        return res.send(err);
      });
  });

  app.put("/todo/:id", function(req, res) {
newTodo= models.task
    newTodo.update(req.body,{
        where: {
        id:req.params.id
    }}).then(function(foundUser) {
        return res.send(foundUser);
      })
      .catch(function(err) {
        return res.send(err);
      });
  });

   app.patch("/todo/:id", function(req, res) {
newTodo= models.task
    newTodo.update(req.body,{
        where: {
        id:req.params.id
    }}).then(function(foundUser) {
        return res.send(foundUser);
      })
      .catch(function(err) {
        return res.send(err);
      });
  });
   
   app.delete("/todo/:id", function(req, res){
       deletedTodo = models.task
       deletedTodo.destroy({
           where: {
               id:req.params.id
           }}).then(function(deletedUser){
               return res.send("File was deleted");
   }).catch(function(err){
       return res.send(err);
       });
   })


app.listen(3000, function () {
    console.log('Express running on http://localhost:3000/.')
});
