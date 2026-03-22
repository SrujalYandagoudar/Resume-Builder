import mongoose from "mongoose";

export async function dbConnection() {
    try{
        await mongoose.connect(process.env.MONGODB_STRING)
                        .then(()=>{
                            console.log('Database Connection is Successfull');
                        });
    }catch(err){
        console.log('Database Connection Problem');
    }
}