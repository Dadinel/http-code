import * as express from "express";

export function getRandomCode(req: express.Request, resp: express.Response) {
    let code: number = getRandomNumber(2,6);
    resp.status(code).send();
}

function getRandomNumber(min:number, max: number): number {
    let number: number = Math.floor(Math.random() * (+max - +min)) + +min; 

    switch (number) {
        case 2:
            return getRandomNumber(200, 227);
        case 3:
            return getRandomNumber(300, 309);
        case 4:
            return getRandomNumber(400, 452);
        case 5:
            return getRandomNumber(500, 512);
        default:
            return number;
    }
}