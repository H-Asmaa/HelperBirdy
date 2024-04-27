import express from 'express'
import connectDB from './config/database.config.js'

import dotenv from 'dotenv'

dotenv.config({path: './config/.env'})


const app = express()


app.get('/', (req, res) => {
    res.send('Hello World')
})

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log('Server is running on port 3000')
    })

})