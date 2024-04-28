export interface DatabaseExecuter {
    executeQuery(queryType: string): void;
}