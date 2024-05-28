import express from "express";
import cors from "cors";
import bookingDetail from './Routers/bookingRouter.js'
import roomrouter from "./Routers/roomRouter.js";

const app = express()
const PORT =5000


app.use(cors())
app.use(express.json())
app.use('/api', bookingDetail)
app.use('/api', roomrouter )


app.get('/',(req,res)=>{
    res.status(200).send("running")
})

app.listen(PORT,()=>{
    console.log("app is running in port",PORT)
})
