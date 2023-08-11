import { ObjectId } from "mongodb";
import db from "../config/mongodb.js";
const Users = db.getInstance().changeCollection("users").connect();

export default class Citas {


    static async users(req, res){

        const data = await Users
            .find({})
            .project({ attendant: 0, quotes: 0 })
            .sort({ "names.name": 1 })
            .toArray();

        return res.json(data);
    }

    static async users(req, res){

        const data = await Users.find().sort({ "names.name": 1 }).toArray();
        return res.json(data);
    }
}