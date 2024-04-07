import { Request, Response } from "express";
import Mapa from "../models/mapa";


export const getMaps = async (req: Request, res: Response) => {
    const listMaps = await Mapa.findAll();

    res.json( listMaps );
}

export const getMap = async (req: Request, res: Response) => {
    const { id } = req.params;
    const mapa = await Mapa.findByPk(id);

    if (mapa) {
        res.json(mapa);
    } else {
        res.status(404).json({
            msg: `ERROR 404. No existe un Mapa con el id ${id}`
        });
    };
}

export const deleteMap = async (req: Request, res: Response) => {
    const { id } = req.params;
    const map = await Mapa.findByPk(id);

    if (!map) {
        return res.status(404).json({
            msg: `ERROR 404. No existe un Mapa con el id ${id}`
        });
    } else {
        await map.destroy();
        res.json({
            msg: `Mapa con id ${id} ha sido eliminado con éxito`
        });
    }
}

export const postMap = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Mapa.create(body);

        res.json({
            msg: 'Mapa añadido con éxito!',
        });

    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al añadir el Mapa'
        });
    }
}

export const updateMap = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    const map = await Mapa.findByPk(id);

    try {
        if (!map) {
            res.status(404).json({
                msg: `ERROR 404. No existe un Mapa con el id ${id}`
            });
        } else {
            await map.update(body);
            res.json({
                msg: `El Mapa con id ${id} ha sido actualizado con éxito!`
            });
        }

    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al actualizar el Mapa'
        });
    }


}