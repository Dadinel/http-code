import * as express from "express";
import { getRandomCode } from "../routes/randon";
import { getUrlCode } from "../routes/urlCode";

export function makeEndPoints(server: express.Express): void {
    server.all("/code/v1/rand", getRandomCode);
    server.all("/code/v1/:id", getUrlCode);
}