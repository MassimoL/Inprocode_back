import db from '../db/connection';
import { DataTypes } from 'sequelize';

const Chart = db.define('charts', {
    year: {
        type: DataTypes.INTEGER,
    },
    amount: {
        type: DataTypes.INTEGER,
    },
    colorcode: {
        type: DataTypes.STRING,
    },
    state: {
        type: DataTypes.BOOLEAN,
    },
 
}, {
    createdAt: false,
    updatedAt: false,
});

export default Chart;