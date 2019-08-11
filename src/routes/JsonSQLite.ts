import { Request, Response } from "express";
import { JsonQuery } from "../database/json/JsonQuery";

const _jsonQuery: JsonQuery = new JsonQuery();

export class JsonSQLite {

    public static async getJsonSQLite(req: Request, resp: Response): Promise<void> {
        let exist: any = await JsonSQLite.existJsonByID(req, resp);

        if (exist) {
            resp.status(200).send( await _jsonQuery.getJson(req.params["id"]) );
        }
    }

    public static async addJsonSQLite(req: Request, resp: Response): Promise<void> {
        resp.status(201).send( await _jsonQuery.addJson(req.body) );
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
            resp.status(200).send( await _jsonQuery.updateJson(req.params["id"], req.body) );
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