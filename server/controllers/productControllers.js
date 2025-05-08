import Product from "../models/Product.js"

// add new product
export const addProduct = async (req, res) => {
    try {
        const {name} = req.body

        if(!name) {
            return res.status(400).json({message: "name is required!"})
        }

        await Product({name}).save()

        res.status(201).json({message: "product is created"})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

// get all products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

// delete product 
export const deleteProdudct = async (req, res) => {
    try {
        const { productId } = req.body
        await Product.findOneAndDelete({_id: productId})
        res.status(200).json({message: "product deleted"})
    } catch (error) {
        res.status(500).json(error.message)
    }
}