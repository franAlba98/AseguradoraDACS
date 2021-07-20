import express from 'express';
import http from 'http';
import { UsuarioInterface } from '../interfaces/interfaces';

export default class Server {
    private static _instance: Server;
    public app: express.Application;
    private httpServer: http.Server;
    private currentUser: any;

    private constructor() {
        this.app = express();
        this.app.set('port', 3000);
        this.app.set('json spaces', 2);
        this.httpServer = new http.Server(this.app);
        this.currentUser = 0;
    };

    public setUser(user:UsuarioInterface){
        this.currentUser=user;
    }
    public getUser(){
        return this.currentUser;
    }
    public static get instance() {
        return this._instance || (this._instance = new this());
    };
    public start(callback: Function, ip?: string, port?: number) {
        if (port) {
            this.app.set('port', port);
        };
        this.httpServer.listen(this.app.get('port'), ip, callback());
    };
}