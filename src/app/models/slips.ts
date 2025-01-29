import Account from "./account";
import { Transactions } from "./transactions";
export class Slips {

    id_boleto?:number;
    codigo_Barra:string;
    valor:number;
    status:string;
    data_Pagamento:Date;
    caminho_arquivo:string;
    extencao_boleto:string;

    constructor(codigo_Barra:string,
        valor:number,
        status:string,
        data_Pagamento:Date,
        caminho_arquivo:string,
        extencao_boleto:string){
            this.codigo_Barra=codigo_Barra;
            this.valor=valor;
            this.status=status;
            this.data_Pagamento=data_Pagamento;
            this.caminho_arquivo=caminho_arquivo;
            this.extencao_boleto=extencao_boleto;
        }
}
