// Define server port
const PORT = 3001;

// Express importing
const express = require('express');

// Posts router importing
const postsRouter = require('./routers/posts.js');

// Initialize a new express server
const app = express();

// Use imported posts router
app.use('/posts', postsRouter);

// Server root route
app.get('/', (request, response) => {

    // Log you are on server root route
    response.send('You are on the server root route.');

});

// Start server listening
app.listen(PORT, () => {

    // Log server listening
    console.log(`Server is listening on http://localhost:${PORT}...`);

});