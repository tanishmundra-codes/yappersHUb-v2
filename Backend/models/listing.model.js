import mongoose from 'mongoose';

const listingSchema = mongoose.Schema({
    owner: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default : "https://www.istockphoto.com/photo/glowing-green-neural-network-3d-rendering-gm941338190-257292992",
        set: (v) => 
          v === "" 
            ? ("https://www.istockphoto.com/photo/glowing-green-neural-network-3d-rendering-gm941338190-257292992") 
            : v,
    },
    link: {
        type: String,
        required: true
    }
})

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;