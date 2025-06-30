// Express importing
const express = require('express');

// Posts importing
const posts = require('../posts.js');

// Initialize a new express router
const router = express.Router();

// Index (Read)
router.get('/', (request, response) => {

    // response.send('Stai visualizzando tutti i post.');

    // Send posts object array
    response.json(posts);

});

// Show (Read)
router.get('/:id', (request, response) => {

    // Get ID parameter
    const id = request.params.id;

    // response.send(`Stai visualizzando il post con ID: ${id}`);

    // IF request ID is valid
    if (id >= 1 && id <= posts.length) {

        // Convert post ID to array index
        const postIndex = id - 1;

        // Send post object with specified ID from posts objects array
        response.json(posts[postIndex]);

    }
    // ELSE (request ID is invalid)
    else {

        // Send invalid ID message
        response.send('Invalid ID.');

    }

});

// Store (Create)
router.post('/', (request, response) => {

    response.send('Hai creato un nuovo post.');

});

// Update (Update)
router.put('/:id', (request, response) => {

    // Get ID parameter
    const id = request.params.id;

    response.send(`Hai modificato completamente il post con ID: ${id}`);

});

// Modify (Update)
router.patch('/:id', (request, response) => {

    // Get ID parameter
    const id = request.params.id;

    response.send(`Hai modificato parzialmente il post con ID: ${id}`);

});

// Destroy (Delete)
router.delete('/:id', (request, response) => {

    // Get ID parameter
    const id = request.params.id;

    response.send(`Hai eliminato il post con ID: ${id}`);

});

// Export router module
module.exports = router;