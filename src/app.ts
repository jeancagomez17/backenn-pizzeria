import express, {Express} from 'express';
import cors from 'cors';
import config from './config';
import routes from './routes/api'

export class ServerConfig{
    private _app:Express = express();

    constructor(){
        this._app.use(cors());
        this._app.set('PORT', config.PORT);
        this._app.use(express.json());
        this._app.use('/api', routes)
    }
     get app():Express{
        return this._app;
     }
    


}