import "dotenv/config";
import { MongoClient } from "mongodb";

export default class Connect {

    static instance;
    connection = new MongoClient(process.env.URI_MONGODB);
    collectionName = "users";
    dbName = "ejercicio-citas";
    db;

    static getInstance() { 

        if(Connect.instance instanceof Connect) return Connect.instance;
        Connect.instance = new Connect;
        return Connect.instance;
    }

    changeDb(name){
        this.dbName = name;
        return Connect.instance;
    }

    changeCollection(name){
        this.collectionName = name
        return Connect.instance;
    }

    connect(){
        this.db = this.connection.db(this.dbName).collection(this.collectionName);
        return this.db;
    }

}