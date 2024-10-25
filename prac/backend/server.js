const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());



app.get('/api/articles', (req, res) => {
  res.json(articles);
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  console.log(`Message from ${name} (${email}): ${message}`);

  res.status(200).json({ message: 'Inquiry received!' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
