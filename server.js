const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

const app = express();
const port = 3000;

// Parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Replace with your Line Channel Access Token
const LINE_ACCESS_TOKEN = 'kF4QxphWyBV9je4KmPxqZWhbashsCHMYorGSnRrsT1S+bPxoDLy4hwkRaF27tp3WyMSujQfAUQliYe324KyaSDMYpgAfAdRzLVCjKeztuwsuG0tkdW0hCBnq1rMnISeYBecvVVj6cI6Aq8m5zvVKFAdB04t89/1O/w1cDnyilFU=';

// Endpoint to handle the form submission
app.post('/sendOrderToLine', async (req, res) => {
  const menu = req.body.menu;
  
  const message = {
    to: 'U063a9fe1981fd713b09c2d36cd4d6a99',
    messages: [
      {
        type: 'text',
        text: `Order received: ${menu}`
      }
    ]
  };

  try {
    await axios.post('https://api.line.me/v2/bot/message/push', message, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINE_ACCESS_TOKEN}`
      }
    });

    res.json({ message: 'Order sent successfully!' });
  } catch (error) {
    console.error('Error sending message to Line:', error);
    res.status(500).json({ error: 'Failed to send order to Line' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});