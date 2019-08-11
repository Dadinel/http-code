import { Database } from "sqlite3";
import { jsonTable } from "./json/jsonTable";

export async function createDBTables(db: Database): Promise<void> {
    jsonTable(db);
}