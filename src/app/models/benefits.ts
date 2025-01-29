import Account from "./account";
export class Benefits {

    id_beneficio?:number;
    tipo_beneficio:string;
    descricao:string;
    valor:number;

    constructor(
        tipo_beneficio:string,
        descricao:string,
        valor:number){
            this.tipo_beneficio=tipo_beneficio;
            this.descricao=descricao;
            this.valor=valor;
        }
}
