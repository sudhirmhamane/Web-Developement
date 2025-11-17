import mongoose from "mongoose";

// mongoose.connect(process.env.MONGO_URI)

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connection Successfully");
        
    } catch (error) {
        console.error("MongoDB connection error", error);
        process.exit();
    }
}

export default connectDB;