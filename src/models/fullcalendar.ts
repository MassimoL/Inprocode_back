import db from '../db/connection';
import { DataTypes } from 'sequelize';

const FullCalendar = db.define('calendario', {
    title: {
        type: DataTypes.STRING,
    },
    date: {
        type: DataTypes.DATE,
    },      
}, {
    createdAt: false,
    updatedAt: false,
});

export default FullCalendar;
