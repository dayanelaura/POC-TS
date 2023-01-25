import express from "express";
import { addMovie, getAllMovies } from "./controllers/moviesControllers.js";
import { addMovieInMyList, getMoviesInMyList, markAsWatched, removeMovieOfMyList } from "./controllers/mylistControllers.js";

const app = express();
app.use(express.json());

app.get('/health', (req, res) =>  res.send('ok'));

app.post('/movies', addMovie);
app.get('/movies', getAllMovies);

app.get('/mylist', getMoviesInMyList);
app.post('/mylist', addMovieInMyList);
app.put('/mylist/:id', markAsWatched);
app.delete('/mylist/:id', removeMovieOfMyList);

const port = 4000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});