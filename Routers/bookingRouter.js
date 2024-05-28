import express from "express";
import { bookRoom, bookedCustomerDetails, customerBookingDetails } from "../Controllers/bookingDetails.js";

const router = express.Router();


router.post('/bookroom/:roomId',bookRoom) // to book room based on the roomId
router.get('/bookedcustomerdetails',bookedCustomerDetails)//to get the room booked customer details
router.get('/customerbookingdetails/:bookingId',customerBookingDetails)//to get customer booking details with the booking id 
                                 //to identify the number of times the customer booked the rooms
                                                                            


export default router;