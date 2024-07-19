import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://islem1:islem123@cluster0.bxst68y.mongodb.net/Zoofood').then(()=>console.log("DB Connected"));
   
}
