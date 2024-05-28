import express from "express";
import { allBookedRooms, createRoom } from "../Controllers/bookingDetails.js";

const roomrouter = express.Router();

roomrouter.post('/createroom', createRoom)//to create a new room
roomrouter.get('/allbookedrooms', allBookedRooms)//to get all the booked rooms



export default roomrouter;