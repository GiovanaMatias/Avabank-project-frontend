import { Account } from "./account";
import { Transactions } from "./transactions";
export class Slips {

    slipId?: number;
    barcode: string;
    amount: number;
    status: string;
    dueDate: Date;
    paymentdate: string;
    filePath: string;
    slipExtension: string;

    constructor(
        slipId: number,
        barcode: string,
        amount: number,
        status: string,
        dueDate: Date,
        paymentdate: string,
        filePath: string,
        slipExtension: string
    ) {
        this.slipId = slipId
        this.barcode = barcode
        this.amount = amount
        this.status = status
        this.dueDate = dueDate
        this.paymentdate = paymentdate
        this.filePath = filePath
        this.slipExtension = slipExtension
    }
}
