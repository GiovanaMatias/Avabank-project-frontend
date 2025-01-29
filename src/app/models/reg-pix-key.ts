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
}
