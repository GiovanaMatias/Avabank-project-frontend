import { TransactionsInvest } from "./transactions-invest";

export class RegInvestments {

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
