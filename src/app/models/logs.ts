import { User } from "./user";
export class Logs {
    id_log?: number;
    resultado: boolean;
    tentativas: number;
    data_hora: Date;
    id_usuario:number;

    constructor(
        resultado: boolean,
        tentativas: number,
        data_hora: Date,
        id_usuario:number,){
            this.resultado=resultado;
            this.tentativas=tentativas;
            this.data_hora=data_hora;
            this.id_usuario=id_usuario
        }
}
