import { deleteMovieOfMyListById, insertMovieInMyList, showMoviesInMyList, updateMovieStatus } from "../repositories/mylist-repository.js";
import { Request, Response } from "express";
import dayjs from "dayjs";
import { Mylist } from "../protocols/mylist.js";

export async function getMoviesInMyList(req: Request, res: Response){
    try{        
        const moviesInMyList = await showMoviesInMyList();
        return res.status(200).send(moviesInMyList.rows);
    }catch(err){
        console.log(err);
        res.send(err);
    }
}

export async function addMovieInMyList(req: Request, res: Response){
    try{
        const movie = res.locals.movie;
        const { movie_id } = movie;

        const mylistObject = {
            movie_id,
            status: 'unwatched',
            created_at: dayjs().format('YYYY-MM-DD')
        } as Mylist;
        
        await insertMovieInMyList(mylistObject);
        return res.status(201).send(mylistObject);
    }catch(err){
        console.log(err);
        res.send(err);
    }
}

export async function markAsWatched(req: Request, res: Response){
    const idNumber = res.locals.idNumber;

    await updateMovieStatus(idNumber);
    return res.sendStatus(200);
}

export async function deleteMovieOfMyList(req: Request, res: Response){
    const idNumber = res.locals.idNumber;

    await deleteMovieOfMyListById(idNumber);
    return res.sendStatus(200);
}