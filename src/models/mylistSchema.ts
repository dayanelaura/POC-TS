import joi from 'joi';
import { Mylist } from '../protocols/mylist';

export const mylistSchema: joi.ObjectSchema<Mylist> = joi.object({
    movie_id: joi.number().required()
});