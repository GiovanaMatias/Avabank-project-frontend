import Account from "./account";
import { Slips } from "./slips";

export class Transactions {
    id_Transacao?:number;
    id_conta_origem: number;
    id_conta_destino: number;
    valor:number;
    tipo_Transacao:string;
    data_Hora:Data;
    
}
