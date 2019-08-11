import { getServer } from "./server/server";
import { makeEndPoints } from "./server/endpoints";
import { getDB } from "./database/db";
import { createDBTables } from "./database/tables";

( async() => {
    await createDBTables( await getDB());
    makeEndPoints(getServer());
})();