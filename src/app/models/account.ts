
import { User } from "./user";
import { RegPixKey } from "./reg-pix-key";
import { Benefits } from "./benefits";
import { Transactions } from "./transactions";


export class Account {
    accountId?: number;
    accountType: string;
    accountNumber: string;
    agency: number;
    balance: number;
    localDateTime: Date;
    password: string;
    customerCpf: string;
    benefitId: number;
    UserId: number;


    constructor(
        accountId: number,
        accountType: string,
        accountNumber: string,
        agency: number,
        balance: number,
        localDateTime: Date,
        password: string,
        customerCpf: string,
        benefitId: number,
        UserId: number
    ) {
        this.accountId = accountId
        this.accountType = accountType
        this.accountNumber = accountNumber
        this.agency = agency
        this.balance = balance
        this.localDateTime = localDateTime
        this.password = password
        this.customerCpf = customerCpf
        this.benefitId = benefitId
        this.UserId = UserId
    }
}

