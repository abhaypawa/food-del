import express from "express"
import { addToCart, removefromCart, getCart } from "../controllers/cartController.js"
import authMiddleware from "../middleware/auth.js";
const cartrouter = express.Router();


//end points

cartrouter.post("/add",authMiddleware, addToCart)
cartrouter.post("/remove",authMiddleware, removefromCart)
cartrouter.post("/get",authMiddleware, getCart)


export default cartrouter;