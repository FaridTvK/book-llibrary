import { validationResult } from "express-validator";

export const validateMyRequest = (req, res, next) => {
    const error = validationResult(req)
    console.log(error)
    if (!error.isEmpty()) {
        return res.status(200).send({ error: error.array() })
    } else {
        return next()
    }
}