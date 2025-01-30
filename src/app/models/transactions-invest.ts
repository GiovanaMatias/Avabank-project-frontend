import { Account } from "./account";
import { RegInvestments } from "./reg-investments";

export class TransactionsInvest {
    investimentTransactionId?: number;
    investmentId: number;
    accountId: number;
    transactionType: string;
    transactionAmount: number;
    transactionDate: Date;
    description: string;
    purchaseDate: Date;
    redemptionDate: Date;

    constructor(
        investimentTransactionId: number,
        investmentId: number,
        accountId: number,
        transactionType: string,
        transactionAmount: number,
        transactionDate: Date,
        description: string,
        purchaseDate: Date,
        redemptionDate: Date
    ) {
        this.investimentTransactionId = investimentTransactionId
        this.investmentId = investmentId
        this.accountId = accountId
        this.transactionType = transactionType
        this.transactionAmount = transactionAmount
        this.transactionDate = transactionDate
        this.description = description
        this.purchaseDate = purchaseDate
        this.redemptionDate = redemptionDate
    }


}
