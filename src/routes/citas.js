import { Router } from "express";
import Citas from "../services/citas.service.js";
const router = Router();


router
    .get("/users", Citas.users)

    .get("/doctors", Citas.specialityDoctors)

    .get("/quotes/next/:id", Citas.quotesNext)

    .get("/users/doctor/:id", Citas.usersDoctor)

    .get("/quotes/date", Citas.quotesDate)

    .get("/counsultingRoom", Citas.consultingRoomDoctors)

    .get("/quotes/specify", Citas.quotesSpecify)

    .post("/user", Citas.postUser)

export default router;