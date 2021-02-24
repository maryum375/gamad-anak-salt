const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const index = require('./routes/index');
const check = require('./routes/check');
const decrypt = require('./routes/decrypt');
const cors = require('cors');
const app = express();
app.use(cors())
app.use( bodyParser.json() ); 
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.use(check)
app.use(decrypt)
app.use(index)

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(process.env.PORT || 8080);