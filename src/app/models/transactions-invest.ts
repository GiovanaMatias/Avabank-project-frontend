<<<<<<< HEAD
import Account from "./account";
import { RegInvestments } from "./reg-investments";

export class TransactionsInvest {
    id_Trasacao_Investimento?: number;
    id_Investimento: number;
    id_Conta:number;
    tipo_Transação:string;
    valor_Transação:number;
    descricao:string;
    data_Compra:Date;
    data_Resgate:Date;

    constructor( id_Investimento: number,
        id_Conta:number,
        tipo_Transação:string,
        valor_Transação:number,
        descricao:string,
        data_Compra:Date,
        data_Resgate:Date,){
            this.id_Investimento=id_Investimento;
            this.id_Conta=id_Conta;
            this.tipo_Transação=tipo_Transação;
            this.valor_Transação =valor_Transação;
            this.descricao=descricao;
            this.data_Compra=data_Compra;
            this.data_Resgate=data_Resgate;
        }
=======
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


>>>>>>> 371db35 (update model)
}
