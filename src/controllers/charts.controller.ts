import { Request, Response } from "express";
import { validationResult } from 'express-validator';
import Chart from "../models/charts";
import { chartValidator } from "../validations/charts.validations";

export const getCharts = async (req: Request, res: Response) => {
    const listChard = await Chart.findAll();

    res.json( listChard );
}

export const getChart = async (req: Request, res: Response) => {
    const { id } = req.params;
    const chart = await Chart.findByPk(id);

    if (chart) {
        res.json(chart);
    } else {
        res.status(404).json({
            msg: `ERROR 404. No existe un Chart con el id ${id}`
        });
    };
}

export const postChart = [
    ...chartValidator,

    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { body } = req;

        try {
            await Chart.create(body);

            res.json({
                msg: 'Chart añadido con éxito!',
            });

        } catch (error) {
            console.log(error);
            res.json({
                msg: 'Error al añadir el Chart'
            });
        }
    }
];









