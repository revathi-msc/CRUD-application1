const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserRouter = require('./routes/user')
require('dotenv').config();
const app = express();

app.use(cors());
app.get("/", (req,res) => {
    res.setHeader("Access-Control-Allow-Credentials","true");
    res.send("API is running");
})


app.use(express.json());


mongoose.set('strictQuery', false);
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,err => {
    if(err) throw err;
})


app.use('/users',UserRouter);
const connection = mongoose.connection;
connection.once('open',() => {
    console.log("Database connected successfully")
})


app.listen(5000, () => {
    console.log("server running on the port 5000")
});
