const express = require('express');
const path = require('path')
// const webpack = require('webpack')
const app = express();
app.use(express.static(__dirname));

app.get('*', function(req, res){
  res.sendFile(path.resolve(__dirname, 'index.html'))
});

const PORT = process.env.PORT || 4000
app.listen(PORT, () => (
	console.log("App running on port ", PORT)
))