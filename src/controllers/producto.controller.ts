import { Request, Response } from "express";
import { validationResult } from 'express-validator';
import Producto from "../models/producto";
import { productValidator } from '../validations/producto.validations'; 



export const getProducts = async (req: Request, res: Response) => {
    const listProducts = await Producto.findAll();

    res.json(listProducts);
}

export const getProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Producto.findByPk(id);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({
            msg: `ERROR 404. No existe un producto con el id ${id}`
        });
    };
}

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Producto.findByPk(id);

    if (!product) {
        return res.status(404).json({
            msg: `ERROR 404. No existe un producto con el id ${id}`
        });
    } else {
        await product.destroy();
        res.json({
            msg: `Producto con id ${id} ha sido eliminado con éxito`
        });
    }
}

export const postProduct = [
    ...productValidator,

    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { body } = req;

        try {
            await Producto.create(body);

            res.json({
                msg: 'Producto añadido con éxito!',
            });

        } catch (error) {
            console.log(error);
            res.json({
                msg: 'Error al añadir el producto'
            });
        }
    }
];

export const updateProduct = [
    ...productValidator,

    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id } = req.params;
        const { body } = req;
        const product = await Producto.findByPk(id);

        try {
            if (!product) {
                res.status(404).json({
                    msg: `ERROR 404. No existe un producto con el id ${id}`
                });
            } else {
                await product.update(body);
                res.json({
                    msg: `El producto con id ${id} ha sido actualizado con éxito!`
                });
            }

        } catch (error) {
            console.log(error);
            res.json({
                msg: 'Error al actualizar el producto'
            });
        }
    }
];


