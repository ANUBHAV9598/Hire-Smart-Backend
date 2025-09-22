import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        isConnected = true;
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log('Error in connecting to mongodb', error);
    }
}
export default connectDB;