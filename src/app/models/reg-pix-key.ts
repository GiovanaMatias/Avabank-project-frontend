<<<<<<< HEAD
import Account from "./account";
export class RegPixKey {

    id_chave?:number;
    tipo_chave:string;
    chave:string;
    id_usuario:number;

    constructor(tipo_chave:string,
        chave:string,
        id_usuario:number,){
            this.tipo_chave=tipo_chave;
            this.chave=chave;
            this.id_usuario=id_usuario;
        }
=======
import { Account } from "./account";
export class RegPixKey {

    pixId?: number;
    pixType: string;
    pix: string;
    userId: number;

    constructor(
        pixId: number,
        pixType: string,
        pix: string,
        userId: number
    ) {
        this.pixId = pixId
        this.pixType = pixType
        this.pix = pix
        this.userId = userId
    }
>>>>>>> 371db35 (update model)
}
