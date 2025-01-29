import { User } from "./user";
export class Logs {
<<<<<<< HEAD
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
=======
    logId?: number;
    result: boolean;
    attempts: number;
    dtimestamp: Date;
    iuserId: number;

    constructor(
        logId: number,
        result: boolean,
        attempts: number,
        dtimestamp: Date,
        iuserId: number
    ) {
        this.logId = logId
        this.result = result
        this.attempts = attempts
        this.dtimestamp = dtimestamp
        this.iuserId = iuserId
    }
>>>>>>> 371db35 (update model)
}
