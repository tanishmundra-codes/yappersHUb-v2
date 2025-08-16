import mongoose from "mongoose";
import initData from "./data.js";
import Listing from "../models/listing.model.js"

const MONGO_URL = "mongodb://127.0.0.1:27017/yappersHub"

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to DB")
    } catch (error) {
        console.log("Mongoose connection failed ", error)
    }
}

export default connectDB

const initDB = async () => {
    try {
        await connectDB();
        await Listing.deleteMany({});
        await Listing.insertMany(initData.data);
        console.log("Data initialised")
    } catch (error) {
        console.log("Error ocurred during data initialisation ", error);
    }
    
}

initDB();



