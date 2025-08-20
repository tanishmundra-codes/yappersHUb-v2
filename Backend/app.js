import express from "express";
import cors from "cors"
import connectDB from "./db/index.js"
import Listing from "./models/listing.model.js"

const app = express();
const PORT = 3000;

//middlewares
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

//Index Route => tool's data
app.get("/api/listings", async (req, res) => {
    const listings = await Listing.find({});
    res.json(listings);
})

//Create Route
app.post("/api/listings", async (req, res) => {
    try {
        const newListing = new Listing(req.body);
        await newListing.save();
        res.status(201).json(newListing);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

//Edit Route
// Edit Route
app.put("/api/listings/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const editListing = await Listing.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true, runValidators: true }
    );

    if (!editListing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    console.log("Listing edited");
    res.json(editListing);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


//Show Route
app.get("/api/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing_id = await Listing.findById(id);
    res.json(listing_id);
})


