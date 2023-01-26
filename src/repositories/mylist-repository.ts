import { QueryResult } from "pg";
import connection from "../database/database.js";
import { Mylist, MylistEntity } from "../protocols/mylist.js";

export function showMoviesInMyList(): Promise<QueryResult<MylistEntity>>{
    return connection.query(`
        SELECT movie_id, title, description, duration, my.status, my.created_at
        FROM movies JOIN mylist my
        ON movies.id = my.movie_id`);
}

export function findMovieInMyList(id: number): Promise<QueryResult<MylistEntity>>{
    return connection.query(`SELECT * FROM mylist WHERE movie_id=$1`, [id]);
}

export function insertMovieInMyList(mylistObject: Mylist): Promise<QueryResult<MylistEntity>> {
    const { movie_id, status, created_at } = mylistObject;
    return connection.query(`
            INSERT INTO mylist (movie_id, status, created_at)
            VALUES ($1, $2, $3)`, [movie_id, status, created_at]);
}

export function updateMovieStatus(id: number): Promise<QueryResult<MylistEntity>>{
    return connection.query(`UPDATE mylist SET status='watched' WHERE movie_id=$1`, [id]);
}

export function deleteMovieOfMyListById(id: number): Promise<QueryResult<MylistEntity>>{
    return connection.query(`DELETE FROM mylist WHERE movie_id=$1`, [id]);
}