import {body, check} from "express-validator"

export const bookSchemaValidator = [
    body("title")
    .trim()
    .isLength({min:4})
    .withMessage("has to have min 4 Character")
    .contains(" "),
    body("author")
    .trim()
    .isLength({min:4})
    .withMessage("has to have min 4 Character"),
    body("imageUrl")
    .trim()
    .notEmpty()
    .isURL()
    .withMessage("it has to required to write the URL")
    .isLowercase()

]