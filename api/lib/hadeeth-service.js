import { Database } from "./database";

export class HadeethService {
    constructor(tableName) {
        this.tableName = tableName;
    }

    find(id) {
        let result;
        if(id) {
            result = new Database(this.tableName).get(id);
        } else {
            throw new Error("Id is invalid");
        }
        return result;
    }

}