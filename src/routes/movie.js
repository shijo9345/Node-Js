const { Router } = require('express');

const route = Router();

const moviesList = [
    {
        id: 1,
        name: "Hero",
    },
    {
        id: 2,
        name: "Singam",
    },
    {
        id: 3,
        name: "Pulli",
    }
];

route.get('/', (req, res) => {
    res.send(moviesList);
});
route.get('/movies', (req, res) => {
    res.send("hdello");
});

route.get('/movies/:name', (req, res) => {
    const { name } = req.params;

    const find = moviesList.filter((m) => m.name === name);

    // if (find.length > 0) {
        res.send(find);
    // } else {
    //     res.status(404).send('Movie not found');
    // }
});

module.exports = route;
