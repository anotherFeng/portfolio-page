const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.set('view engine')
app.use(express.static(__dirname + '/public'));

app.use('/', (req, res)=>{
  res.render('index');
})

app.listen(port, ()=>{
  console.log("listening");
})