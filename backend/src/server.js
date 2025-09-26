import express from "express";
import cors from "cors"
import dotenv from 'dotenv';


import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import ratelimiter from "./middleware/rateLimiter.js";


const app=express();
const PORT=process.env.PORT || 5001
dotenv.config();


//middleware
app.use(cors({
    origin:"http://localhost:5173",
}));
app.use(express.json()); //this middleware will parse JSON bodies:req.body
app.use(ratelimiter)
//our custom middleware
// app.use((req,res,next)=>{
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();
// });

app.use("/api/notes",notesRoutes);




connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server running on PORT:", PORT);
    });
});

