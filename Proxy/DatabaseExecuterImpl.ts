import { DatabaseExecuter } from "./DatabaseExecuter";

export class DatabaseExecuterImpl implements DatabaseExecuter {
    executeQuery(queryType: string): void {
        console.log(`Executing the ${queryType} query in DB`);
    }
}