import { getServer } from "./server/server";
import { makeEndPoints } from "./server/endpoints";

const server = getServer();

makeEndPoints(server);