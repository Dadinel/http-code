import { Request, Response } from "express";

export function getUrlCode(req: Request, resp: Response): void {
    resp.status(parseInt(req.params["id"])).send();
}