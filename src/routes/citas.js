import { Router } from "express";
import Citas from "../services/citas.service.js";
const router = Router();


router
    .get("/users", Citas.users)

    .get("/doctors", Citas.specialityDoctors)

    .get("/quotes/next/:id", Citas.quotesNext)


export default router;