import { UserType } from "./user-type";
import { Logs } from "./logs";
import { Address } from "./address";
import { Account } from "./account";



export class User {
    userId: number;
    name: string;
    cpf: string;
    birthDate: Date;
    email: string;
    phone: string;
    creationDate: Date;
    userTypeId: number;
    password: string;
    enabled: boolean;

    constructor(
        userId: number,
        name: string,
        cpf: string,
        birthDate: Date,
        email: string,
        phone: string,
        creationDate: Date,
        userTypeId: number,
        password: string,
        enabled: boolean
    ) {
        this.userId = userId
        this.name = name
        this.cpf = cpf
        this.birthDate = birthDate
        this.email = email
        this.phone = phone
        this.creationDate = creationDate
        this.userTypeId = userTypeId
        this.password = password
        this.enabled = enabled
    }
}
