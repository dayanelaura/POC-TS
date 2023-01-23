import { Request, Response } from "express";

export function getAllMovies(req: Request, res: Response){
    res.send('all movies here');
}

export function getMoviesInMyList(req: Request, res: Response){
    res.send('movies in my list here');
}

export function addMovieInMyList(req: Request, res: Response){
    const movie: object = req.body;
    //tem que ter a validação pelo middleware antes & um model com o body de validação do objeto que vem;
    //recebe do body e adiciona os elementos status: 'unwatched' e created_at: now();
    //INSERT INTO ...

    res.sendStatus(201);
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