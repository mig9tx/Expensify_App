const path = require('path');
const express = require('express');
const app = express(); //creates express app
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000; // for heroku to serve our files

app.use(express.static(publicPath)); //use public directory to serve up static assets

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html')); 
}); //if what the user is requested is not available just send back index.html

app.listen(port, () => {
    console.log('Server is up!');
}); //port for where the server runs
