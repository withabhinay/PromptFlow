import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery',true);  //setting it to true makes gives no warning for mongoose option in console

    if(isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
         
        isConnected = true;
        console.log('MongoDB Created')

    } catch (error) {
        console.log("not connected")
        console.log(error);
    }
}