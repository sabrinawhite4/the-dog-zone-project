const express = require('express');
const app = express();
const gradient = require('gradient-string');
const path = require('path');
const { stringify } = require('querystring');

const port = process.env.PORT || 5050;

app.listen(port, () => {
    console.log(gradient.instagram(`Server dancing on ${port}`));
});

const dogs = []

app.get('/dogName', (req, res) => {
    const newDogName = generateDoggieName();
    res.status(200).send(newDogName);
});

app.post("/dogURL", (req, res) => {
    const {imageURL} = req.body;
    const dogURL = {imageURL};
    dogs.push(dogURL);
    res.status(200).send(dogs)
    });

function capFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

function generateDoggieName() {
    const name = ['franklin','simba','kobe','ozzy','rex','ollie','bubba','king','spot','rajah','mia', 'peanut','wally','louis', 'buster','bear', 'bertram','bark obama','chico','goose']
    const newName = capFirst(name[getRandomInt(0, name.length + 1)])
    return newName;
};
