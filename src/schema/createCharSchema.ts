import joi from "joi";

export const createCharSchema = joi.object({
    nickname: joi.string().min(3).required(),
    race: joi.string().required(),
    perks: joi.string().required(),
    strenght: joi.number().min(5).required(),
    vitality: joi.number().min(5).required(),
    intelligence: joi.number().min(5).required(),
})