import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./db/db_config";
import formRoutes from "./routes/formRoutes"

const app=express();
app.use(express.json());
const PORT=5000;

app.use('/api/v1',formRoutes);

AppDataSource.initialize().then(()=>{
    console.log("database connected sucessfull");
    app.listen(PORT,()=>{
    console.log("Server is Running at ",PORT)
})
}).catch((err)=>{
    console.log("Error while connecting to the database : ",err)
})

