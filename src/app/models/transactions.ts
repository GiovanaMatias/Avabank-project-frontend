import { Account } from "./account";
import { Slips } from "./slips";

export class Transactions {
    transactionId?: number;
    sourceAccountId: number;
    destinationAccountId: number;
    amount: number;
    transactionType: string;
    timestamp: Date;
    description: string;
    tfee: number;
    pix: string;

    constructor(
        transactionId: number,
        sourceAccountId: number,
        destinationAccountId: number,
        amount: number,
        transactionType: string,
        timestamp: Date,
        description: string,
        tfee: number,
        pix: string
    ) {
        this.transactionId = transactionId
        this.sourceAccountId = sourceAccountId
        this.destinationAccountId = destinationAccountId
        this.amount = amount
        this.transactionType = transactionType
        this.timestamp = timestamp
        this.description = description
        this.tfee = tfee
        this.pix = pix
    }

}
