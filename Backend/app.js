import express from "express";
import connectDB from "./db/index.js"
import Listing from "./models/listing.model.js"

const app = express();
const PORT = 3000;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log("Server is started on port: ", PORT);
        })
    })
    .catch((err) => {
        console.log("Mongoose connecton failed ", err)
    })

app.get("/", (req, res) => {
    res.send("YappersHub")
})




