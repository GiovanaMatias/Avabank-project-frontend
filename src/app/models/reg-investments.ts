import { TransactionsInvest } from "./transactions-invest";

export class RegInvestments {

    investimentId?: number;
    investimentoType: string;
    investimentoValue: number;
    investimentoYield: number;

    constructor(
        investimentId: number,
        investimentoType: string,
        investimentoValue: number,
        investimentoYield: number
    ) {
        this.investimentId = investimentId
        this.investimentoType = investimentoType
        this.investimentoValue = investimentoValue
        this.investimentoYield = investimentoYield
    }
}   
