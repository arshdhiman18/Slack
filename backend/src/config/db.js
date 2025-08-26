import mongoose from "mongoose"
import {ENV} from "./env.js"

export const connectDB=async()=>{
    try {
        await mongoose.connect(ENV.MONGO_URI)
        console.log("Mongo DB connected Successfully")
    } catch (error) {
        console.log("Error connnecting to mongodb:",error);
        process.exit(1)
    }
}