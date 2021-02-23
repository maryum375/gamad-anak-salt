const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const cors = require('cors');
const app = express();
app.use(cors())
app.use( bodyParser.json() ); 
app.use(express.static(path.join(__dirname, 'build')));

app.post('/check', function (req, res) {
  let result = { success: false }
  if (!req.body || !req.body.lordName) {
    result.message = "Please provide giant name!"
  }
  else if (req.body.lordName.toLowerCase() !== "shay") {
    result.message = "Wrong!! You are not my giant. Go away!"
  }
  else {
    result.message = "My giant!! Have a nice Purim!"
    result.thanksLink = "https://saltsecurity.slack.com/archives/D013L9AA1P0"
    result.success = true
  }

  return res.send(result);
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(process.env.PORT || 8080);