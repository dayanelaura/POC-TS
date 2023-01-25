import { showMoviesInMyList } from "../repositories/mylist-repository.js";
import { Request, Response } from "express";
import dayjs from "dayjs";

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
    
}

export function markAsWatched(req: Request, res: Response){
    const { id } = req.params;
    const idNumber = Number(id);
    //filtra pelo filme e UPDATE movies SET status="watched" WHERE id=$1, [idNumber];

    res.sendStatus(200);
}

export function removeMovieOfMyList(req: Request, res: Response){
    const { id } = req.params;
    const idNumber = Number(id);
    //filtra pelo filme e DELETE ... WHERE id=$1, [idNumber];

    res.sendStatus(200);
}