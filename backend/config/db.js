import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://greatstack:Kusuma%40123@cluster0.pldn7qr.mongodb.net/?retryWrites=true&w=majority&appName=food-del')
    .then(()=>console.log("DB CONNECTED"))
}
