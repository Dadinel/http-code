import { Database, RunResult } from "sqlite3";
import { v4 } from "uuid";
import { getDB } from "../db";
import { tryPromise } from "../../util/tryPromise";

export class JsonQuery {
    //Preciso melhorar isso...
    private _database?: any | Database = null;

    constructor() {
        getDB()
            .then( (db:Database) => {
                this._database = db;
            });
    }

    public async getJson(uuid: string) : Promise<any> {
        return new Promise( (resolve, reject) => {
            //Tem alguma coisa de errado na lib ou type atual que o err está vindo com o valor da query... ¬¬
            this._database.get("SELECT JSON FROM JSONAPI WHERE ID = '" + uuid + "'", (p01: any, p02: any, p03: any) => {
                let jsonAPI: any = this.verifyQuery([p01, p02, p03]);

                if (jsonAPI) {
                    resolve(jsonAPI);
                } else {
                    reject(jsonAPI);
                }
            });
        });
    }

    public async existJson(uuid: string): Promise<boolean> {
        let json = await tryPromise(this.getJson.bind(this), false, uuid);

        if (json) {
            return true;
        } else {
            return false;
        }
    }
    
    public async addJson(json: string | any): Promise<string> {
        if ( typeof(json) == "object" ) {
            json = JSON.stringify(json);
        }
    
        const uuid: string = v4();
    
        this._database.run( "INSERT INTO JSONAPI VALUES ('" + uuid + "', '" + json + "', " + this.getTimeNow() + ");", (result: RunResult, err: Error) => {
            if (err) {
                console.error(err);
                throw err;
            }
        });
    
        return uuid;
    }
    
    public async updateJson(uuid: string, json: string | any): Promise<void> {
        if ( typeof(json) == "object" ) {
            json = JSON.stringify(json);
        }
    
        this._database.run( "UPDATE JSONAPI SET JSON = '" + json + "', ADDED = " + this.getTimeNow() + " WHERE ID = '" + uuid + "'", (result: RunResult, err: Error) => {
            if (err) {
                console.error(err);
                throw err;
            }
        });
    }
    
    public async deleteJson(uuid: string): Promise<void> {
        this._database.run( "DELETE FROM JSONAPI WHERE ID = '" + uuid + "'", (result: RunResult, err: Error) => {
            if (err) {
                console.error(err);
                throw err;
            }
        });
    }

    public async purgeJson(): Promise<void> {
        let yesterday: Date = new Date();

        yesterday.setDate( yesterday.getDate() - 1);

        this._database.run( "DELETE FROM JSONAPI WHERE ADDED < " + yesterday.getTime().toString(), (result: RunResult, err: Error) => {
            if (err) {
                console.error(err);
                throw err;
            }
        });
    }

    private getTimeNow(): string {
        return new Date().getTime().toString();
    }

    private verifyQuery(param: any[]): any {
        for (let i: number = 0; i < param.length; i++) {
            if (this.verifyObjectQuery(param[i])) {
                return param[i];
            }
        }
    }

    private verifyObjectQuery(p: any): boolean {
        if (p && p["JSON"]) {
            return true;
        }

        return false;
    }
}