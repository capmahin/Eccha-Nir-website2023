import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from "morgan";

//configure env
dotenv.config();
//rest object
const app = express();

//middelwares
app.use(express.json());
app.use(morgan('dev'));

//rest api
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to ecommerce app</h1>")
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, ()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgGreen.black);
});