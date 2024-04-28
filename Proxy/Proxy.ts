import { DatabaseExecuter } from "./DatabaseExecuter";
import { DatabaseExecuterImpl } from "./DatabaseExecuterImpl";

export class Proxy implements DatabaseExecuter {
    private isAdmin: boolean;
    private executer: DatabaseExecuter;
    private username: string;

    constructor(username: string, password: string) {
        this.username = username;
        // validations for Admin
        if (username === "Admin" && password === "Admin") {
            this.isAdmin = true;
        }
        // create Real object
        this.executer = new DatabaseExecuterImpl();
    }

    executeQuery(queryType: string): void {
        // check for admin
        if (this.isAdmin) {
            this.executer.executeQuery(queryType);
        } else {
            // check if query type is DELETE and user is not admin
            if (queryType === "DELETE") {
                this.log(`${this.username} attempted to execute ${queryType} query at ${new Date()}`);
                throw new Error("Only Admin can execute the Delete Query");
            }
            this.executer.executeQuery(queryType);
        }
        this.log(`${this.username} executed ${queryType} query at ${new Date()}`);
    }

    private log(message: string): void {
        console.log(`Log: ${message}`);
    }
}