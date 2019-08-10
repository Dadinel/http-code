import * as express from "express";

export function getUrlCode(req: express.Request, resp: express.Response) {
    resp.status(parseInt(req.params["id"])).send();
}