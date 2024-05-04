import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    reviews: { type: Number, required: true },
    image: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});


export const Product = mongoose.model("Product", productSchema);