import * as express from "express";
import { getRandomCode } from "../routes/randon";
import { getUrlCode } from "../routes/urlCode";
import { JsonSQLite } from "../routes/JsonSQLite"
import { home } from "../routes/home";

export function makeEndPoints(server: express.Express): void {
    server.get("/json/v1/:id", JsonSQLite.getJsonSQLite);
    server.delete("/json/v1/:id", JsonSQLite.deleteJsonSQLite);
    server.put("/json/v1/:id", JsonSQLite.updateJsonSQLite);
    server.post("/json/v1/", JsonSQLite.addJsonSQLite);

    server.get("/", home);

    server.all("/code/v1/rand", getRandomCode);
    server.all("/code/v1/:id", getUrlCode);
}