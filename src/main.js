const express = require('express');
const movieRouter = require('./routes/movie');
const songRouter = require('./routes/song');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {               
    res.send("<h1> Welcome to the page </h1>");
});


app.use('/movies', movieRouter);
app.use('/songs', songRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
