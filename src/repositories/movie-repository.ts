import { QueryResult } from "pg";
import connection from "../database/database.js";
import { Movie, MovieEntity } from "../protocols/movie.js";

export function insertMovie(movie: Movie): Promise<QueryResult<MovieEntity>> {
        return connection.query(`
                INSERT INTO movies (title, description, duration, created_at)
                VALUES ($1, $2, $3, $4)`, 
                [movie.title, movie.description, movie.duration, movie.created_at]);
}

export function showAllMovies(): Promise<QueryResult<MovieEntity>>{
        return connection.query(`SELECT * FROM movies`);
}

export function findMovieById(id: number): Promise<QueryResult<MovieEntity>>{
        return connection.query(`SELECT * FROM movies WHERE id=$1`, [id])
}