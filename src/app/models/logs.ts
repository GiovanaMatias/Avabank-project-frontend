import { User } from "./user";
export class Logs {
    logId?: number;
    result: boolean;
    attempts: number;
    dtimestamp: Date;
    iuserId: number;

    constructor(
        logId: number,
        result: boolean,
        attempts: number,
        dtimestamp: Date,
        iuserId: number
    ) {
        this.logId = logId
        this.result = result
        this.attempts = attempts
        this.dtimestamp = dtimestamp
        this.iuserId = iuserId
    }
}
