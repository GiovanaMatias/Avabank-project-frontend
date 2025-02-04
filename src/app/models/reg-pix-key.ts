import { Account } from "./account";
export class RegPixKey {

    pixId?: number;
    pixType: string;
    pix: string;
    userId: number;

    constructor(
        pixId: number,
        pixType: string,
        pix: string,
        userId: number
    ) {
        this.pixId = pixId
        this.pixType = pixType
        this.pix = pix
        this.userId = userId
    }
}
