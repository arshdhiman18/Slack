import express from "express"
import {ENV} from "./config/env.js"

const app = express()

const PORT = ENV.PORT;

app.get("/",(req,res)=>{
    res.send("Hello world 123")
})

app.listen(PORT,()=>{
    console.log("Server has started on port:",PORT)
})