const express = require('express')
const colors = require('colors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

//rest object
const app = express();

//MongoDB connection
connectDB();

//dotenv config
dotenv.config();

//middlewares
app.use(express.json())
app.use(morgan('dev'))


//routes
app.use('api/v1/user', require("./routes/userRouter"));

//port
const port = process.env.PORT || PORT

//listen port
app.listen(port, () => {
    console.log(
        `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}` .bgWhite
    )
});
