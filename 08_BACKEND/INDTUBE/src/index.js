import dotenv from "dotenv";
import {app} from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
});


const PORT = process.env.PORT || 7000


connectDB()
.then(() =>{
    app.listen(PORT,() => {
    console.log(`Server Is Running on Port ${PORT}`);
})
})
.catch((error)=>{
    console.log("MongoDB connection error!",error);
})