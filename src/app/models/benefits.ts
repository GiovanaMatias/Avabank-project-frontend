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


}
