import joi from 'joi';

export const movieSchema = joi.object({
    title: joi.string().required(),
    description: joi.string().required(),
    duration: joi.string().required(),
    status: joi.string().valid('watched').valid('unwatched'),
    created_at: joi.string()
});