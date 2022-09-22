// Its about validation using custom middleware
// Checking if searched movie via post request is exist in server or not , 
//if not exist then show 404 error

const { json } = require("express");
const express = require("express");
const fs = require("fs");
const AvailableMovieMiddleware = require("./Middlewares/availableMovie.middleware");
const validateMiddleware = require("./Middlewares/validation.middleware");
const MovieRoute = express.Router()
let count = 0;

const app = express();
app.use(express.json())

let port = 8080;
app.listen(port, (req, res) => {
    console.log(`listening on port ${port} `);
});

const getMovieData = (req, res) => {
    count++;
    let movieData = req.body;
    console.log("Visited route ", count, " times");
    res.send(movieData);
}

app.use(MovieRoute);
MovieRoute.use(validateMiddleware); // Validating input data correct or not.
MovieRoute.use(AvailableMovieMiddleware); // Checking movie avalable or not in database for exact same input data.
MovieRoute.post("/movies", getMovieData);



