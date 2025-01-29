
import { User } from "./user";
import { RegPixKey } from "./reg-pix-key";
import { Benefits } from "./benefits";
import { Transactions } from "./transactions";


export class Account {
    id_Conta?: number;
     tipo_Conta: string;
     numero_Conta: string;
     agencia: number;
     saldo: number;
     data_Criacao: Date;
     senha_Hash: string;
     cpf_Cliente: string;
     id_Beneficio: number;
     id_Usuario:number;



    constructor(
        tipo_Conta: string,
        numero_Conta: string,
        agencia: number,
        saldo: number,
        data_Criacao: Date,
        senha_Hash: string,
        cpf_Cliente: string,
        id_Beneficio: number,
        id_Usuario:number,){

            this.tipo_Conta = tipo_Conta;
            this.numero_Conta =numero_Conta;
            this.agencia=agencia;
            this.saldo=saldo;
            this.data_Criacao=data_Criacao;
            this.senha_Hash=senha_Hash;
            this.cpf_Cliente=cpf_Cliente;
            this.id_Beneficio=id_Beneficio;
            this.id_Usuario=id_Usuario;
        }


}
   