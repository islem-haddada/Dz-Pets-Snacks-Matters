import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://dzPSM:Dz.PSM2024@cluster0.qj6ktzi.mongodb.net/Dz-Pets-Snacks-Matters').then(()=>console.log("DB Connected"));
   
}
