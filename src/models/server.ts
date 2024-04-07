import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import routesProducto from '../routes/producto.routes';
import routesFullCalendar from '../routes/fullcalendar.routes';
import routesMapa from '../routes/mapa.routes';
import routesChart from '../routes/charts.routes';
import db from '../db/connection';

class Server {

    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.middlewares();
        this.routes();
        this.dbConnection();
        this.listen();
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicación funcionando en el puerto ${this.port}`);
        });
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'API working!'
            });
        });

        this.app.use('/api/productos', routesProducto);
        this.app.use('/api/fullcalendar', routesFullCalendar);
        this.app.use('/api/map', routesMapa);
        this.app.use('/api/chart', routesChart);
    }

    middlewares() {
        this.app.use(express.json());

        this.app.use(cors());
        
    }

    async dbConnection() {
        try{
            await db.authenticate()
            console.log('Base de datos conectada');
        }catch(error){
            console.log(error);
            console.log('Error al conectar la bases de datos');
        }
    }
}

export default Server;