const express = require('express');
const router = express.Router();

// Route to handle contact form submission
router.post('/', (req, res) => {
  const { name, email, message } = req.body;

  // Here you can add logic to save the message to a database or send an email
  console.log(`Received message from ${name} (${email}): ${message}`);

  // Respond with a success message
  res.status(200).json({ message: 'Your message has been received!' });
});

module.exports = router;
