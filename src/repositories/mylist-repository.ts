import { QueryResult } from "pg";
import connection from "../database/database.js";

export function showMoviesInMyList(): Promise<QueryResult>{
    return connection.query(`SELECT * FROM mylist`);
}

/* export function insertMovieInMyList(movieId: number): Promise<QueryResult> {
    return connection.query(`
            INSERT INTO mylist (movie_id, status, created_at)
            VALUES ($1, $2, $3, $4)`, 
            [movie.id, movie.status, movie.created_at]);
} */