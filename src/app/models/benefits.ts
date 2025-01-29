<<<<<<< HEAD
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
=======
import { Account } from "./account";
export class Benefits {

    benefitId?:number;
    benefitType:string;
    description:string;
    value:number;

  constructor(
    benefitId: number, 
    benefitType: string, 
    description: string, 
    value: number
) {
    this.benefitId = benefitId
    this.benefitType = benefitType
    this.description = description
    this.value = value
  }    


>>>>>>> 371db35 (update model)
}
