import express from "express";
import cors from 'cors';
import {config} from "dotenv"
import { productRouter } from "./routes/productRoutes.js";
import userRoute from "./routes/userRoutes.js";
import orderRoute from "./routes/orderRoutes.js";
import { errorHandling } from "./middleware/errorHandler.js";
import { connectToDB } from "./config/dbConfig.js";


config();
connectToDB();

const app = express();
app.use(cors());
app.use(express.json());
// שורה זו מגדירה שרת קבצים סטטי שכאשר ישלחו לי בבקשה כתובת של תמונה שיש לה סיומת של קובץ אז כאשר הוא ניתקל בסיומת קובץ הוא ישר יודע ללכת לתיקייה הזו הסטטית ולחפש בה את התמונה הרצויה
// app.use(express.static('images'))

app.use("/api/products", productRouter);
app.use("/api/users", userRoute);
app.use("/api/orders", orderRoute);
//activate middleware when error is returned
app.use(errorHandling);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`app is working on port ${port}`);
});
