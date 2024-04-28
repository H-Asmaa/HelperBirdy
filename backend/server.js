import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';


import connectDB from './config/database.config.js'
import autoRoutes from './routes/auto.routes.js'
dotenv.config({path: './config/.env'})
const app = express()


app.use(morgan('dev'));
app.use(express.json()); // for parsing application/json
app.use(cookieParser());

app.use('/api', autoRoutes);


connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port  ${process.env.PORT}`)
    })

})