const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Sample list of favorite books
let books = [
  { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { id: 2, title: '1984', author: 'George Orwell' },
];

// Middleware to parse JSON
app.use(bodyParser.json());

// GET request to retrieve all books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// POST request to add a new book
app.post('/api/books', (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.json({ message: 'Book added successfully', book: newBook });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
