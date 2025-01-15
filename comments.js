// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create the comments array
const comments = [
    'This is the first comment',
    'This is the second comment',
    'This is the third comment'
];

// Create a route for the comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

// Start the web server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});