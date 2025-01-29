<<<<<<< HEAD
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
=======
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
>>>>>>> 371db35 (update model)
}
