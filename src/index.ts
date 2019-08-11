import { getServer } from "./server/server";
import { makeEndPoints } from "./server/endpoints";
import { getDB } from "./database/db";
import { createDBTables } from "./database/tables";
import { Database } from "sqlite3";
import { JsonQuery } from "./database/json/JsonQuery";

( async() => {
    await createDBTables( await getDB());
    makeEndPoints(getServer());

    const jsonPurge: JsonQuery = new JsonQuery();

    setInterval( () => {
        jsonPurge.purgeJson();
    }, ( 1000 * 60 ) * 45 );
})();