// Load environment variables
require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000; // Change this if needed
const conflexUrl = process.env.conflexUrl; // Load Conflex URL from .env file

app.get('/connect-conflex', async (req, res) => {
    try {
        // Attempting to connect to Conflex
        console.log('Conflex URL:', conflexUrl);

        const response = await axios.get(conflexUrl);

        // If the connection is successful
        res.status(200).send('Connected to Conflex successfully');
    } catch (error) {
        // If there's an error connecting to Conflex
        console.error('Error details:', error.response ? error.response.data : error.message);
        res.status(500).send('Failed to connect to Conflex');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Microservice is running on http://localhost:${PORT}`);
});
