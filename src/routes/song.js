const { Router } = require('express');

const route = Router();

const moviesList = [
    {
        id: 1,
        name: "Rocky",
    },
    {
        id: 2,
        name: "heee",
    },
    {
        id: 3,
        name: "lockash",
    }
];

route.get('/', (req, res) => {
    res.send(moviesList);
});
route.get('/songs', (req, res) => {
    res.send("hdello");
});

route.get('/songs/:name', (req, res) => {
    const { name } = req.params;

    const find = moviesList.filter((m) => m.name === name);

    // if (find.length > 0) {
        res.send(find);
    // } else {
    //     res.status(404).send('Movie not found');
    // }
});

module.exports = route;
