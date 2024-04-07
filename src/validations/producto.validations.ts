import { check } from 'express-validator';

export const productValidator = [
    check("name")
        .exists()
        .withMessage("Name is required")
        .isString()
        .withMessage("Name should be a string")
        .isLength({ min: 4 })
        .withMessage("Name should be at least 2 characters"),
    check("price")
        .exists()
        .withMessage("Price is required")
        .isNumeric()
        .withMessage("Price should be a number"),
    check("description")
        .exists()
        .withMessage("Description is required")
        .isString()
        .withMessage("Description should be a string")
];