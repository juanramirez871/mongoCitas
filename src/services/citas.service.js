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

        const data = await Users
        .aggregate([
            { 
                $match: {_id: new ObjectId(req.params.id)},
            },
            {
                $project: {
                    _id: 0,
                    quotes: {
                        $filter: {
                            input: "$quotes",
                            as: "quote",
                            cond: { $eq: [ "$$quote.code", 1 ] }
                        }
                    } 
                }
            },
            { $unwind: "$quotes" }
        ])    
        .toArray();

        if(data.length == 0) return res.json({ msg: "no tiene citas proximas" })

        return res.json(data);
    }

    static async usersDoctor(req, res){

        const data = await Users
            .aggregate([
                {
                    $match: { "quotes.doctorId": new ObjectId(req.params.id) }
                }
            ])
            .toArray()

        res.json(data)
    }

    static async quotesDate(req, res){
        
        const data = await Users
            .aggregate([
                {
                    $project: {
                        _id: 0,
                        quotes: {
                            $filter: {
                                input: "$quotes",
                                as: "quote",
                                cond: { $eq: ["$$quote.date", "2023-07-12"] }
                            }
                        }
                    }
                },
                { $match: { quotes: { $ne: [] } } }
            ])
            .toArray()

        res.json(data)
    }

    static async consultingRoomDoctors(req, res){

        const data = await Doctors
            .find()
            .toArray();

        res.json(data)
    }
}