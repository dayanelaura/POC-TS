import { mylistSchema } from "../models/mylistSchema.js";
import { Mylist } from "../protocols/mylist.js";
import { NextFunction, Request, Response } from "express";
import { findMovieById } from "../repositories/movie-repository.js";
import { findMovieInMyList } from "../repositories/mylist-repository.js";

export async function movieBodyValidation(req: Request, res: Response, next: NextFunction){
    try{
        const movie = req.body as Mylist;

        const { error } = mylistSchema.validate(movie, { abortEarly: false });
        if(error){
            const errors = error.details;
            const errorsTXT = errors.map(detail => detail.message);
            return res.status(400).send(errorsTXT);
        }

        const movieDB = await findMovieById(movie.movie_id);
        if (!movieDB.rows[0])
            return res.sendStatus(404);

        const mylistDB = await findMovieInMyList(movie.movie_id);
        if (mylistDB.rows[0])
            return res.sendStatus(409);

        res.locals.movie = movie;
        next();
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}

//isso daqui é um service
export async function movieIdValidation(req: Request, res: Response, next: NextFunction){
    try{
        const { id } = req.params;
        const idNumber = Number(id);

        const mylistDB = await findMovieInMyList(idNumber);
            if (!mylistDB.rows[0])
                return res.sendStatus(404);

        res.locals.idNumber = idNumber;
        next();
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}