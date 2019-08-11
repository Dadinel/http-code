import { Database, RunResult } from "sqlite3";

export async function jsonTable(db: Database): Promise<void> {
    db.run("CREATE TABLE IF NOT EXISTS JSONAPI ( ID TEXT PRIMARY KEY, JSON TEXT, ADDED NUMERIC );", (result: RunResult, err: Error) => {
        if (err) {
            console.error(err);
            throw err;
        }
    });
}