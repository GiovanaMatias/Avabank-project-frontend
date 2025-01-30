
import { User } from "./user";
export class Address {
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



