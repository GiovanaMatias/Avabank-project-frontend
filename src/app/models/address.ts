
import { User } from "./user";
export class Address {
<<<<<<< HEAD
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

=======
    addressId?: number;
    street: String;
    number: number;
    complement: string;
    postalCode: number;
    city: string;
    state: string;
    userId: number;


    constructor(
        addressId: number,
        street: String,
        number: number,
        complement: string,
        postalCode: number,
        city: string,
        state: string,
        userId: number
    ) {
        this.addressId = addressId
        this.street = street
        this.number = number
        this.complement = complement
        this.postalCode = postalCode
        this.city = city
        this.state = state
        this.userId = userId
    }
}



>>>>>>> 371db35 (update model)
