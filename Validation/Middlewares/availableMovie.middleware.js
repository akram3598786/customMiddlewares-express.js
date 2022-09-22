const fs =  require('fs');

const AvailableMovieMiddleware = (req, res, next) => {
    let flg = false;
    // count++;
    fs.readFile("movies.json", (err, data) => {
        let movieData = req.body; // Requested movie obj
        let serverData = JSON.parse(data); // Server movies Data

        // Checking movie data avaialble or not
        serverData.Movies.forEach(movie => {
            if (JSON.stringify(movie) == JSON.stringify(movieData)) flg = true;
        });

        if (flg) {
            // console.log("Movie exists");
            next();
        }
        else res.status(404).send(`Error 404 - Movie not found !`);
    })
}

module.exports = AvailableMovieMiddleware;