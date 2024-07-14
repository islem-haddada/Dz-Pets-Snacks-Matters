import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mohamedfakherelislem:Islem.mongodb1@cluster0.qlwfvgw.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}