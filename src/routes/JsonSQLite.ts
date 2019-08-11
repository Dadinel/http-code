import { Request, Response } from "express";
import { JsonQuery } from "../database/json/JsonQuery";

const _jsonQuery: JsonQuery = new JsonQuery();

export class JsonSQLite {

    public static async getJsonSQLite(req: Request, resp: Response): Promise<void> {
        let exist: any = await JsonSQLite.existJsonByID(req, resp);

        if (exist) {
            let json: any = await _jsonQuery.getJson(req.params["id"]);
            resp.status(200).send(json);
        }
    }

    public static async addJsonSQLite(req: Request, resp: Response): Promise<void> {
        let id: string = await _jsonQuery.addJson(req.body);

        let json: any = req.body;

        json["id"] = id;

        resp.status(201).send(json);
    }
    
    public static async deleteJsonSQLite(req: Request, resp: Response): Promise<void> {
        let exist: boolean = await JsonSQLite.existJsonByID(req, resp);

        if (exist) {
            _jsonQuery.deleteJson(req.params["id"]);
            resp.status(200).send();
        }
    }
    
    public static async updateJsonSQLite(req: Request, resp: Response): Promise<void> {
        let exist: boolean = await JsonSQLite.existJsonByID(req, resp);

        if (exist) {
            _jsonQuery.updateJson(req.params["id"], req.body);

            let json: any = req.body;

            json["id"] = req.params["id"];
            
            resp.status(200).send(json);
        }
    }

    private static async existJsonByID(req: Request, resp: Response): Promise<boolean> {
        let exist: boolean = await _jsonQuery.existJson(req.params["id"]);

        if (exist) {
            return true;
        } else {
            resp.status(404).send();
            return false;
        }
    }
}