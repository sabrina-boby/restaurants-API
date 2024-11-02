import express from "express";
import { sendReservation, getReservations } from "../controller/reservation.js";

const router = express.Router();

router.post("/send", sendReservation);
router.get("/all", getReservations);

export default router;
