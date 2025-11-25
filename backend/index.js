const express = require('express');
const booksRouter = require('./book');
const app = express();
const port = 3000;
app.use(express.json());

app.use('/books', booksRouter);

app.listen(port, () => {
  console.log(`Book app listening at http://localhost:${port}`);
});

module.exports = app;
