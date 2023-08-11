import { ObjectId } from "mongodb";
import db from "../config/mongodb.js";

export default class Citas {


    static async users(req, res){

        return res.json("clientes");
    }
}