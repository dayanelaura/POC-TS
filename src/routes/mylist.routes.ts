import { Router } from "express";
import { addMovieInMyList, deleteMovieOfMyList, getMoviesInMyList, markAsWatched } from "../controllers/mylistControllers.js";
import { movieBodyValidation, movieIdValidation } from "../middlewares/mylistValidations.js";

const myListRouter = Router();

myListRouter.get('/mylist', getMoviesInMyList);
myListRouter.post('/mylist', movieBodyValidation, addMovieInMyList);
myListRouter.put('/mylist/:id', movieIdValidation, markAsWatched);
myListRouter.delete('/mylist/:id', movieIdValidation, deleteMovieOfMyList);

export default myListRouter;