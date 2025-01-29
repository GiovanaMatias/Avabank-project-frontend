
import { User } from "./user";
export class Address {
    id_endereco?:number;
    ruaAV: String;
    numero:number;
    complemento: string;
    cep: number;
    cidade: string;
    estado: string;
    id_usuario: number;
    

    constructor( ruaAV: String,
        numero:number,
        complemento: string,
        cep: number,
        cidade: string,
        estado: string,
        id_usuario: number,
       ){

            this.ruaAV=ruaAV;
            this.numero=numero;
            this.complemento=complemento;
            this.cep=cep;
            this.cidade=cidade;
            this.estado = estado;
            this.id_usuario = id_usuario;
            
            
        }
}

