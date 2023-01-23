import express from "express";
import { addMovieInMyList, getAllMovies, getMoviesInMyList, markAsWatched, removeMovieOfMyList } from "./controllers/moviesControllers.js";

const app = express();
app.use(express.json());

app.get('/health', (req, res) =>  res.send('ok'));

app.get('/movies', getAllMovies);
app.get('/mylist', getMoviesInMyList);
app.post('/mylist', addMovieInMyList);
app.put('/mylist/:id', markAsWatched);
app.delete('/mylist/:id', removeMovieOfMyList);

const port = 4000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});