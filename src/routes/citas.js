import { Router } from "express";
import Citas from "../services/citas.service.js";
const router = Router();


router
    .get("/citas", Citas.users)


export default router;