import * as express from "express";
import { getPort } from "../os/port";

export function getServer(): express.Express {
    const server: express.Express = express();
    const port: string = getPort();

    server.listen( parseInt(port), () => {
        console.log(`Listening:${port}`);
    });

    return server;
}