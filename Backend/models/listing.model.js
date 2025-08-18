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
        default : "https://images.unsplash.com/photo-1617957796155-72d8717ac882?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdyZWVufGVufDB8fDB8fHww",
        set: (v) => 
          v === "" 
            ? ("https://images.unsplash.com/photo-1617957796155-72d8717ac882?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdyZWVufGVufDB8fDB8fHww") 
            : v,
    },
    link: {
        type: String,
        required: true
    }
})

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;