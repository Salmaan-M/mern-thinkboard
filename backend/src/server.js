import express from "express";
import cors from "cors"
import dotenv from 'dotenv';
import path from "path"


import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import ratelimiter from "./middleware/rateLimiter.js";


const app=express();
const PORT=process.env.PORT || 5001
dotenv.config();
const __dirname =path.resolve()


//middleware
if(process.envNODE_ENV!=="production"){

    app.use(cors({
        origin:"http://localhost:5173",
    }));
}

app.use(express.json()); //this middleware will parse JSON bodies:req.body
app.use(ratelimiter)
//our custom middleware
// app.use((req,res,next)=>{
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();
// });

app.use("/api/notes",notesRoutes);


if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))
    
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend/dist","index.html"))
    })
}


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server running on PORT:", PORT);
    });
});

