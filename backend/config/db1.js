import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://islem1:islem123@cluster0.bxst68y.mongodb.net/Dz-Pets-Snacks-Matters').then(()=>console.log("DB Connected"));
   
}
