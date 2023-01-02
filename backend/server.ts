import express from "express";
import dotnev from "dotenv";
import cors from "cors"


const app = express()
dotnev.config()

app.use(cors())

app.listen(process.env.PORT, ()=>{
    console.log("Server Started at port: ", process.env.PORT)
})