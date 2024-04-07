import db from '../db/connection';
import { DataTypes } from 'sequelize';

const Mapa = db.define('map', {
    location: {
        type: DataTypes.STRING,
    },
    latitude: {
        type: DataTypes.STRING,
    },
    longitude: {
        type: DataTypes.STRING,
    },
 
}, {
    createdAt: false,
    updatedAt: false,
});

export default Mapa;