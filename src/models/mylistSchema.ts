import joi from 'joi';

export const mylistSchema = joi.object({
    movie_id: joi.number().required()
});