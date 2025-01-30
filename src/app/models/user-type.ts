import { User } from "./user";
export class UserType {
    userTypeId: number;
    userTypeName: string;

    constructor(userTypeId: number, userTypeName: string) {
        this.userTypeId = userTypeId
        this.userTypeName = userTypeName
    }
}
