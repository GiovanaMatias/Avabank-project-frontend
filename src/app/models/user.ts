import { UserType } from "./user-type";
import { Logs } from "./logs";
<<<<<<< HEAD
import { Address } from "cluster";
import Account from "./account";
=======
import { Address } from "./address";
import { Account } from "./account";
>>>>>>> 371db35 (update model)



export class User {
<<<<<<< HEAD
=======
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
>>>>>>> 371db35 (update model)
}
