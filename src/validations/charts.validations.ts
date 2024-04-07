import { check } from 'express-validator';

export const chartValidator = [
    check("title")
        .exists()
        .withMessage("Title is required")
        .isString()
        .withMessage("Title should be a string")
        .isLength({ min: 5 })
        .withMessage("Title should be at least 5 characters"),
    check("data")
        .exists()
        .withMessage("Data is required")
        .isArray()
        .withMessage("Data should be an array"),
    check("data.*")
        .isNumeric()
        .withMessage("All data elements should be numbers")
];