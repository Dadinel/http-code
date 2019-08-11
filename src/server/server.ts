import * as express from "express";
import { getPort } from "../os/port";
import * as bodyparser from "body-parser";

export function getServer(): express.Express {
    const server: express.Express = express();
    const port: string = getPort();

    server.listen( parseInt(port), () => {
        console.log(`Listening:${port}`);
    });

    server.use(bodyparser.json());

    return server;
}