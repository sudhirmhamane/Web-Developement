import mongoose, { modelNames } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async() =>{
    try {

        const connectionDB = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log(`\n MongoDB Connected! DB host:${connectionDB.connection.host}`);
        
    } catch (error) {
        console.log("MongoDB Connection error",error)
        process.exit(1);
    }
}

export default connectDB;