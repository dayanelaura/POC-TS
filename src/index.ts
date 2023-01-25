import express from "express";
import { addMovie, getAllMovies } from "./controllers/moviesControllers.js";
import { addMovieInMyList, deleteMovieOfMyList, getMoviesInMyList, markAsWatched } from "./controllers/mylistControllers.js";

const app = express();
app.use(express.json());

app.get('/health', (req, res) =>  res.send('ok'));

app.post('/movies', addMovie);
app.get('/movies', getAllMovies);

app.get('/mylist', getMoviesInMyList);
app.post('/mylist', addMovieInMyList);
app.put('/mylist/:id', markAsWatched);
app.delete('/mylist/:id', deleteMovieOfMyList);

const port = 4000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});