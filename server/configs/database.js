import mongoose from "mongoose";
import env from "dotenv"

env.config()

mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => console.log("mongodb connected"))
    .catch((error) => console.log(error))