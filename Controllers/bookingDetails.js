const bookingDetails = [
    {
        id:1,
        roomName:"Standard",
        roomId:101,
        amentities:["double-bed","attached-bathroom","wifi"],
        seatAvailable:4,
        priceAnHour:250,
        bookingStatus:"available",
        customer:"",
        date:"",
        startTime:"",
        endTime:"",
        bookingId:""
    },
    {
        id:2,
        roomName:"Deluxe",
        roomId:201,
        amentities:["King-bed","attached-bathroom","wifi","Ac"],
        seatAvailable:0,
        priceAnHour:500,
        bookingStatus:"booked",
        customer:"Subhashini",
        date:"27-05-2024",
        startTime:"27-05-2024 at 12pm",
        endTime:"28-05-2024 at 12pm",
        bookingId:"001"
    },
    {
        id:3,
        roomName:"Suite",
        roomId:301,
        amentities:["King-bed","attached-bathroom ","wifi","Ac","big-hall","complimentary breakfast"],
        seatAvailable:3,
        priceAnHour:1000,
        bookingStatus:"available",
        customer:"",
        date:"",
        startTime:"",
        endTime:"",
        bookingId:""
    },
    {
        id:4,
        roomName:"Standard",
        roomId:102,
        amentities:["double-bed","attached-bathroom","wifi"],
        seatAvailable:0,
        priceAnHour:250,
        bookingStatus:"booked",
        customer:"salini",
        date:"28-05-2024",
        startTime:"28-05-2024 at 9am",
        endTime:"29-05-2024 at 9am",
        bookingId:"002"
    },
    {
        id:5,
        roomName:"Deluxe",
        roomId:202,
        amentities:["King-bed","attached-bathroom","wifi","Ac"],
        seatAvailable:2,
        priceAnHour:500,
        bookingStatus:"available",
        customer:"",
        date:"",
        startTime:"",
        endTime:"",
        bookingId:""
    },
    {
        id:6,
        roomName:"Suite",
        roomId:302,
        amentities:["King-bed","attached-bathroom ","wifi","Ac","big-hall","complimentary breakfast"],
        seatAvailable:0,
        priceAnHour:1000,
        bookingStatus:"booked",
        customer:"Subhashini",
        date:"29-05-2024",
        startTime:"29-05-2024 at 6pm",
        endTime:"31-05-2024 at 6pm",
        bookingId:"001"
    }
]





//Creating new room

export const createRoom = (req, res) => {
    const {seatAvailable ,amentities, priceAnHour } = req.body;
    const newRoom = {
      id: bookingDetails.length + 1,
      seatAvailable: seatAvailable,
      amentities:amentities,
      priceAnHour: priceAnHour,
    };
    bookingDetails.push(newRoom);
  
    res
      .status(200)
      .json({ message: "Room created successfully", data: newRoom });
  };

//Booking a room

export const bookRoom = (req, res) => {
    const roomId = req.params.roomId;
    const { customer,date,startTime,endTime,bookingId } = req.body;
    const index = bookingDetails.findIndex((ele) => ele.roomId == roomId);
    console.log(index);
    if (index === -1) {
      return res.status(404).send("No such Room ,enter the roomId correctly");
      
    }
    if (bookingDetails[index].bookingStatus=="booked") {
        return res.send("Room not available");
    } else {
        bookingDetails[index].customer = customer;
        bookingDetails[index].date = date;
        bookingDetails[index].startTime = startTime;
        bookingDetails[index].endTime = endTime;
        bookingDetails[index].bookingId = bookingId;
        bookingDetails[index].bookingStatus = "booked";
        bookingDetails[index].seatAvailable = 0;
   
        
        res
          .status(200)
          .json({ message: "Room booked successfully", data: bookingDetails[index] });  
    }
    
  };


  //getting all the booked room
export const allBookedRooms = (req,res)=>{
   const bookedRooms = bookingDetails.filter((ele)=>ele.bookingStatus=="booked")
    res
    .status(200)
    .send(
        bookedRooms.map((room)=>{
            
                return{
                    "RoomName":room.roomName,
                    "BookingStatus":room.bookingStatus,
                    "customerName":room.customer,
                    "date":room.date,
                    "StartTime":room.startTime,
                    "endTime":room.endTime
                }
            
        })
    )
}


//getting customer details along with the booked room name
export const bookedCustomerDetails = (req,res)=>{
    const bookedcustomer = bookingDetails.filter((ele)=>ele.bookingStatus=="booked")
     res
     .status(200)
     .send(
         bookedcustomer.map((room)=>{
             
                 return{
                     
                     "CustomerName":room.customer,
                     "RoomName":room.roomName,
                     "date":room.date,
                     "StartTime":room.startTime,
                     "endTime":room.endTime
                 }
             
         })
     )
 }


 //getting customerbooking how many times a customer booked the rooms using the booking id
 export const customerBookingDetails = (req,res)=>{
    const bookingId = req.params.bookingId
    const details = bookingDetails.filter((ele)=>ele.bookingId== bookingId)
    if(!details){
        res.status(404).send("no such booking available enter the correct bookingId")
    }
    res.status(200).json({count:`${details.length}`,data:details})


 }


 