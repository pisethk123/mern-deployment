import mongoose from "mongoose"

const productSchema = mongoose.Schema({
    name: String,
}, {timestamps: true})

export default mongoose.model("Product", productSchema)