import express from "express";
import cors from "cors";


const app = express()

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true
    })
)



app.use(express.json({limit:"16kb"})); //Parses incoming JSON request bodies
app.use(express.urlencoded({extended: true, limit:"16kb"})); //Parses form submissions (URL-encoded)
app.use(express.static("public")); // Serves files from the public/ folder




export {app};