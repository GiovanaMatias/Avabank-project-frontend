import { TransactionsInvest } from "./transactions-invest";

export class RegInvestments {

<<<<<<< HEAD
    id_investimento?: number;
    tipo_investimento:string;
    valor_investimento:number;
    rendimento:number;

    constructor(
        tipo_investimento:string,
        valor_investimento:number,
        rendimento:number){
            this.tipo_investimento=tipo_investimento;
            this.valor_investimento=valor_investimento;
            this.rendimento=rendimento;
        }
}
=======
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
>>>>>>> 371db35 (update model)
