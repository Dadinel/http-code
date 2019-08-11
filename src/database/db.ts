import { Database } from "sqlite3";

let db: Database;

export async function getDB(): Promise<Database> {
    return new Promise( (resolve, reject) => {
        if ( !db ) {
            db = new Database("./db/apijson.sqlite3", (err) => {
                if (err) {
                    console.error(err);
                    reject(err);
                }

                resolve(db);
                console.log("SQLite:Connected");
            });
        }
        resolve(db);
    });
}