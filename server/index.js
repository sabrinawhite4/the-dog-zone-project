const express = require('express');
const app = express();
const gradient = require('gradient-string');
const path = require('path');
const cors = require('cors')

app.use(cors());
app.use(express.static("public"));


const port = process.env.PORT || 5050;

app.listen(port, () => {
    console.log(gradient.instagram(`Server dancing on ${port}`));
});

const dogs = []

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.post("/dogURL", (req, res) => {
    const {imageURL} = req.body;
    const dogURL = {imageURL};
    dogs.push(dogURL);
    res.status(200).send(dogs)
});
