// TODO: Hines: Require express
// TODO: Hines: Setup and Root Route

var
  express = require('express')

app.get('/createQuestion', function(req, res){
  console.log(req.query);

  var title = "";
  var content = "";
  if (req.query.title){
    title = req.query.title;
  }
  if (req.query.content){
    content = req.query.content;
  }
  var q = new Question({title: title, content: content});
  q.save(function(err, result){
    if (err){console.log(err);}
    else {
      console.log(result);}
      res.json(result);
  });
})
