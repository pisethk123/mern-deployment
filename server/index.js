import express from "express"
import cors from "cors"
import env from "dotenv"

import "./configs/database.js"
import productRoutes from "./routes/productRoutes.js"

env.config()

const app = express()
const origin = process.env.CLIENT_URL.split(",")

app.use(express.json())
app.use(cors({origin}))

app.get("/", (req, res) => {
    res.send("this is server")
})
app.use("/api/product", productRoutes)

app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`))