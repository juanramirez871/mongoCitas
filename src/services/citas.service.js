import { ObjectId } from "mongodb";
import db from "../config/mongodb.js";
const Users = db.getInstance().changeCollection("users").connect();
const Doctors = db.getInstance().changeCollection("doctors").connect();

export default class Citas {


    static async users(req, res){

        const data = await Users
            .find()
            .project({ attendant: 0, quotes: 0 })
            .sort({ "names.name": 1 })
            .toArray();

        return res.json(data);
    }

    static async specialityDoctors(req, res){

        const speciality = (req.query.speciality).toLowerCase()
        const data = await Doctors
            .find({ speciality })
            .project({ consultingRoom: 0 })
            .toArray();

        return res.json(data);
    }

    static async quotesNext(req, res){

        const data = await Doctors
            .find()
            .project({ consultingRoom: 0 })
            .toArray();

        return res.json(data);
    }
}