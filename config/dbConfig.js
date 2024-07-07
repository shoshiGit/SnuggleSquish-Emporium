import mongoose from "mongoose";

export const connectToDB = async () => {
    try {
        let con = process.env.DB_CONNECTION || "mongodb+srv://shoshiwolpe:tUdKBSvpakGNIGxV@mycluster.pyhckqo.mongodb.net/?retryWrites=true&w=majority&appName=myCluster";
        await mongoose.connect(con, 
            // { useNewUrlParser: true, useUnifiedTopology: true, }
        );
        console.log('mongoDB connected successfully!');
    }
    catch (error) {
        console.log(error);
        console.log("failed to connect to mongodb");
        process.exit(1);
    }
}